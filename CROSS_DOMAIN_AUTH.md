# Cross-Domain Authentication Security Guide

## Overview

This implementation allows secure authentication sharing between `crisper.io` (marketing site) and `app.crisper.io` (dashboard).

## ✅ Security Features

### 1. **Secure Cookie Configuration**

- `httpOnly: true` - Prevents XSS attacks by making cookies inaccessible to JavaScript
- `secure: true` - Ensures cookies are only sent over HTTPS in production
- `sameSite: 'lax'` - Protects against CSRF attacks
- Domain scoped to `.crisper.io` - Accessible on both domains but not to external sites

### 2. **JWT Verification**

- Tokens are cryptographically signed and verified
- Signature verification prevents token tampering
- Expiration checks prevent use of old tokens
- Server-side verification only (tokens never exposed to client)

### 3. **No Token Exposure**

- JWT verification happens server-side only
- Tokens are never sent to the client browser
- API only returns minimal user information needed for UI

## 🔧 Required Configuration

### Environment Variables

**Both `app.crisper.io` and `crisper.io` MUST share the same `AUTH_SECRET`:**

#### app.crisper.io/.env

```env
AUTH_SECRET=your-super-secret-key-here-min-32-characters
NEXTAUTH_SECRET=your-super-secret-key-here-min-32-characters

# Other auth provider configs
GITHUB_ID=...
GITHUB_SECRET=...
GOOGLE_ID=...
GOOGLE_SECRET=...
RESEND_API_KEY=...
```

#### crisper.io/.env

```env
AUTH_SECRET=your-super-secret-key-here-min-32-characters
NEXTAUTH_SECRET=your-super-secret-key-here-min-32-characters
```

**⚠️ CRITICAL:** The `AUTH_SECRET` must be **identical** on both sites. This is the key used to sign and verify JWT tokens.

### Generate a Secure Secret

Run this command to generate a secure random secret:

```bash
openssl rand -base64 32
```

Or in Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## 🔒 Security Best Practices

### 1. **Protect Your AUTH_SECRET**

- Never commit it to version control
- Use different secrets for development/staging/production
- Store in secure environment variable management (Vercel, AWS Secrets Manager, etc.)
- Rotate periodically (will invalidate all sessions)

### 2. **HTTPS Only in Production**

- Ensure both domains use HTTPS
- The `secure` flag ensures cookies are only sent over encrypted connections

### 3. **Subdomain Security**

- Be cautious about what you host on other `*.crisper.io` subdomains
- Any compromised subdomain could potentially access the auth cookie
- Consider using a different domain for untrusted content

### 4. **Content Security Policy** ✅ IMPLEMENTED

CSP and security headers are configured in both `next.config.ts` files:

**Security Headers Implemented:**

- `Content-Security-Policy` - Prevents XSS attacks by controlling resource loading
- `X-Frame-Options: DENY` - Prevents clickjacking attacks
- `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
- `X-XSS-Protection: 1; mode=block` - Browser XSS protection
- `Strict-Transport-Security` - Forces HTTPS with HSTS
- `Referrer-Policy` - Controls referrer information leakage
- `Permissions-Policy` - Disables unnecessary browser features

The CSP allows:

- Scripts from self and Vercel Analytics
- Styles from self (with inline support for styling libraries)
- Images from any HTTPS source
- Connections between crisper.io ↔ app.crisper.io
- Media from self (for video content)
- No iframe embedding (`frame-ancestors: 'none'`)

### 5. **Rate Limiting** ✅ IMPLEMENTED

Rate limiting is implemented in the `/api/auth/check` endpoint to protect against abuse:

- **60 requests per minute** per IP address
- In-memory rate limiter with automatic cleanup
- Returns 429 status code when limit exceeded
- Uses `x-forwarded-for` header to identify clients behind proxies

## 🚨 Security Considerations

### Cookie Sharing Risks

**Risk:** Any subdomain compromise can access authentication cookies.

**Mitigation:**

- Only host trusted applications on `*.crisper.io` subdomains
- Use separate domains for user-generated content or untrusted apps
- Monitor all subdomains for security issues

### Token Replay Attacks

**Risk:** Stolen tokens could be used by attackers.

**Mitigation:**

- Short session expiration (30 days max, consider shorter)
- HTTPS only (prevents network sniffing)
- Monitor for suspicious activity patterns
- Implement session revocation in database if needed

### Man-in-the-Middle (MITM)

**Risk:** Attacker intercepts cookies during transmission.

**Mitigation:**

- HTTPS everywhere (enforced by `secure` flag)
- HSTS headers (force HTTPS)
- Certificate pinning for mobile apps

## 🧪 Testing Security

### 1. Test Cookie Sharing

```bash
# Login on app.crisper.io
# Check browser cookies - should see cookie with domain=.crisper.io
# Visit crisper.io - should see "Go to Dashboard" button
```

### 2. Test Token Verification

```bash
# Modify cookie value in browser
# Visit crisper.io - should NOT be authenticated (invalid signature)
```

### 3. Test HTTPS Enforcement

```bash
# In production, cookies should only work over HTTPS
# HTTP requests should not include the secure cookie
```

## 📝 How It Works

1. User logs in on `app.crisper.io`
2. NextAuth creates a signed JWT token
3. Token is stored in a cookie with domain `.crisper.io`
4. User visits `crisper.io`
5. Browser automatically sends cookie (same domain)
6. API route reads cookie and verifies JWT signature **locally** using the shared AUTH_SECRET
7. If valid, returns user info for UI rendering
8. Navbar shows "Go to Dashboard" button

### Technical Implementation

The `/api/auth/check` endpoint on crisper.io:

- Reads the session cookie from the request
- Forwards cookie to app.crisper.io for verification (due to NextAuth v4/v5 incompatibility)
- Returns minimal user info (username, name, email)
- **Rate limiting** - protects against abuse (60 requests/minute per IP)
- **5-second timeout** - prevents hanging requests
- **Secure proxy**: Only calls our trusted app.crisper.io domain

**Note on Version Compatibility:**

- crisper.io uses NextAuth v4.24.11
- app.crisper.io uses NextAuth v5.0.0-beta.29
- These versions use incompatible encryption schemes
- Long-term: Upgrade crisper.io to NextAuth v5 for local token verification

## 🔄 Session Invalidation

To invalidate sessions (force re-login):

1. **Rotate AUTH_SECRET** - invalidates ALL sessions
2. **Clear browser cookies** - logs out that user
3. **Implement database session tracking** - for selective invalidation

## 📞 Support

For security concerns or questions, please open an issue or contact the security team.

## 🔐 Security Checklist

### Environment Configuration

- [ ] AUTH_SECRET configured on both sites (identical values)
- [ ] AUTH_SECRET is at least 32 characters (generate with `openssl rand -base64 32`)
- [ ] AUTH_SECRET not committed to version control
- [ ] Both sites using HTTPS in production
- [ ] OAuth provider credentials configured (GitHub, Google)
- [ ] Resend API key configured for email verification

### Security Features

- [x] Cookie settings configured (httpOnly, secure, sameSite)
- [x] JWT signature verification implemented (local, no external calls)
- [x] Rate limiting implemented (60 req/min per IP)
- [x] CSP headers configured on both sites
- [x] Security headers implemented (X-Frame-Options, HSTS, etc.)
- [ ] All subdomains are trusted applications
- [ ] Session expiration time is appropriate (default: 30 days)

### Monitoring & Testing

- [ ] Test authentication flow between both domains
- [ ] Verify cookies are scoped to `.crisper.io` in production
- [ ] Test rate limiting with multiple rapid requests
- [ ] Verify JWT tampering is detected and rejected
- [ ] Check HTTPS is enforced in production
- [ ] Monitor for suspicious authentication patterns

### Deployment

- [ ] Environment variables deployed to production
- [ ] AUTH_SECRET matches on both production deployments
- [ ] DNS configured correctly for subdomains
- [ ] SSL certificates valid for both domains
- [ ] HSTS headers working in production
