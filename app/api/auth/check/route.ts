import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 60;

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const requests = rateLimitMap.get(identifier) || [];
  
  // Filter out requests outside the time window
  const recentRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW);
  
  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitMap.set(identifier, recentRequests);
  
  // Cleanup old entries periodically
  if (rateLimitMap.size > 10000) {
    const cutoff = now - RATE_LIMIT_WINDOW;
    for (const [key, times] of rateLimitMap.entries()) {
      if (times.every(t => t < cutoff)) {
        rateLimitMap.delete(key);
      }
    }
  }
  
  return true;
}

export async function GET(req: Request) {
  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 
               req.headers.get('x-real-ip') || 
               'unknown';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests' }, 
        { status: 429 }
      );
    }

    const cookieStore = await cookies();
    
    // Check for the session token cookie (name depends on environment)
    const sessionToken = 
      cookieStore.get('__Secure-next-auth.session-token')?.value ||
      cookieStore.get('next-auth.session-token')?.value;

    if (!sessionToken) {
      return NextResponse.json({ authenticated: false });
    }

    // Verify JWT locally using Auth.js decode function
    // Both crisper.io and app.crisper.io now use Auth.js (v5)
    // This enables local token verification without external calls
    if (!process.env.AUTH_SECRET) {
      console.error('[AUTH] AUTH_SECRET is not configured');
      return NextResponse.json({ authenticated: false });
    }

    try {
      // Dynamic import to handle Auth.js JWT decoding
      const { decode } = await import('next-auth/jwt');
      
      // Decode and verify the Auth.js encrypted token
      // Auth.js v5 requires both secret and salt parameters
      const decoded = await decode({
        token: sessionToken,
        secret: process.env.AUTH_SECRET,
        salt: process.env.NODE_ENV === 'production' 
          ? '__Secure-next-auth.session-token'
          : 'next-auth.session-token',
      });

      // If decode returns null, the token is invalid or expired
      if (!decoded) {
        return NextResponse.json({ authenticated: false });
      }

      // Return minimal user info
      return NextResponse.json({
        authenticated: true,
        user: {
          username: decoded.username as string || null,
          name: decoded.name as string || null,
          email: decoded.email as string || null,
        },
      });
    } catch (error) {
      // JWT verification failed - invalid signature or expired token
      console.error('[AUTH] JWT verification failed:', error);
      return NextResponse.json({ authenticated: false });
    }
  } catch (error) {
    console.error('[AUTH] Error checking auth:', error);
    return NextResponse.json({ authenticated: false });
  }
}

