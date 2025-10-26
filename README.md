# Crisper.io - Marketing Website

> Modern, high-performance marketing website built with Next.js 15, React 19, and cutting-edge UI libraries.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

## 🌟 Overview

Crisper.io is the marketing and landing page for a comprehensive business platform that helps companies recover lost ad spend and optimize their customer engagement. The site features cutting-edge animations, modern UI components, and seamless authentication integration with the main application dashboard.

## ✨ Features

### 🎨 **Modern UI/UX**

- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Mode** - System-aware theme switching with animated theme toggler
- **Advanced Animations** - Smooth transitions using Motion (Framer Motion v12)
- **Glass Morphism Effects** - Modern backdrop blur and glassmorphism styling
- **Custom Components** - Extensive library of reusable UI components

### 🔐 **Authentication & Security**

- **Cross-Domain Authentication** - Seamless auth sharing between `crisper.io` and `app.crisper.io`
- **Auth.js (NextAuth v5)** - Modern authentication with JWT tokens
- **Rate Limiting** - 60 requests/minute per IP on auth endpoints
- **Security Headers** - Comprehensive CSP, HSTS, X-Frame-Options, and more
- **Secure Cookies** - httpOnly, secure, and SameSite protection

### 📹 **Media & Content**

- **Mux Video Integration** - Professional video hosting and embedding
- **Optimized Images** - Next.js Image optimization with remote pattern support
- **Custom Fonts** - Google Fonts (Nunito, JetBrains Mono, Geist)

### 🧩 **Key Components**

#### **Hero Section**

- Eye-catching hero with animated beams
- Call-to-action buttons
- Avatar groups with tooltips
- 5-star rating display
- Background beams effect

#### **Feature Tabs**

- Interactive tabbed interface showcasing:
  - AI Helpdesk
  - Chat Widget
  - Shared Inbox
  - Knowledge Base
  - Support CRM
  - Analytics
- Video demonstrations for each feature

#### **Revenue Calculator**

- Interactive ad spend calculator
- Real-time revenue projections
- Sliding number animations
- Monthly and annual recovery estimates

#### **Navigation**

- Sticky navbar with backdrop blur
- Responsive mobile menu (Sheet/Drawer)
- Authentication-aware navigation
- Direct dashboard access for logged-in users

#### **Other Sections**

- Bento Grid layouts
- Animated testimonials
- FAQ accordion
- Orbiting circles demo
- Platform integrations showcase
- Dotted glow backgrounds

### 🎯 **Business Features**

- Ad revenue optimization messaging
- Conversion recovery tools
- Multi-platform integration showcase
- Customer support features
- Analytics and insights

## 🛠️ Tech Stack

### **Core Framework**

- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - Latest React with Server Components
- **TypeScript 5** - Type-safe development
- **Turbopack** - Next-generation bundler (used in dev and build)

### **Styling & UI**

- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives (40+ components)
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu
  - Hover Card, Label, Menubar, Navigation Menu, Popover, Progress
  - Radio Group, Scroll Area, Select, Separator, Slider, Switch
  - Tabs, Toggle, Tooltip, and more
- **Class Variance Authority** - Component variant management
- **clsx & tailwind-merge** - Conditional className utilities

### **Animation**

- **Motion 12.23** - Production-ready animations (Framer Motion)
- **tw-animate-css** - Tailwind animation utilities
- **Embla Carousel** - Smooth, physics-based carousels

### **UI Components**

- **shadcn/ui** - Customizable component collection
- **Magic UI** - Custom animated components
  - Animated Beam, Animated List, Bento Grid, Marquee
- **Animate UI** - Custom animation primitives
- **Lucide React** - Modern icon library (500+ icons)
- **Tabler Icons** - Additional icon set

### **Forms & Validation**

- **React Hook Form 7.64** - Performant form management
- **Zod 4.1** - TypeScript-first schema validation
- **@hookform/resolvers** - Schema resolver integration

### **Authentication**

- **Auth.js (next-auth v5.0.0-beta.29)** - Authentication solution
- **jose 6.1** - JWT encoding/decoding library

### **Media**

- **Mux Player React** - Professional video player
- **next-video 2.5** - Video optimization for Next.js

### **Utilities**

- **date-fns 4.1** - Modern date utility library
- **cmdk** - Command menu component
- **sonner** - Toast notifications
- **vaul** - Drawer component
- **input-otp** - One-time password input
- **react-day-picker** - Date picker component
- **react-resizable-panels** - Resizable layout panels
- **react-use-measure** - React hook for measuring elements
- **recharts** - Chart library

## 🏗️ Project Structure

```
crisper.io/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── check/          # Authentication verification endpoint
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with fonts and theme
│   └── page.tsx                # Homepage
├── components/
│   ├── animate-ui/             # Custom animation components
│   ├── magic-ui/               # Custom animated UI components
│   ├── ui/                     # shadcn/ui components (60+ components)
│   ├── navbar.tsx              # Main navigation
│   ├── hero.tsx                # Hero section
│   ├── feature-tabs.tsx        # Feature showcase
│   ├── revenue-calculator.tsx  # Interactive calculator
│   ├── faq.tsx                 # FAQ section
│   ├── footer.tsx              # Site footer
│   └── ...                     # Other sections
├── hooks/
│   ├── use-mobile.ts           # Mobile detection hook
│   └── use-controlled-state.tsx # Controlled state hook
├── lib/
│   ├── utils.ts                # Utility functions
│   └── get-strict-context.tsx  # React context utilities
├── public/                     # Static assets
│   ├── logo.png               # Brand logo
│   ├── favicon icons          # Multiple sizes
│   └── manifest.json          # PWA manifest
├── types/                      # TypeScript definitions
├── videos/                     # Video metadata
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- **Node.js 20+** (recommended)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/crisper.io.git
   cd crisper.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Authentication (Required for cross-domain auth)
   # ⚠️ MUST match the secret in app.crisper.io
   AUTH_SECRET=your-super-secret-key-here-min-32-characters
   NEXTAUTH_SECRET=your-super-secret-key-here-min-32-characters

   # Environment
   NODE_ENV=development
   ```

   Generate a secure secret:

   ```bash
   openssl rand -base64 32
   # or
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm run start
```

The build uses **Turbopack** for faster compilation.

## 🔒 Authentication System

### Cross-Domain Authentication

Crisper.io shares authentication seamlessly with `app.crisper.io`:

1. **User logs in on app.crisper.io**
2. **Auth.js creates signed JWT** stored in a cookie with domain `.crisper.io`
3. **User visits crisper.io** - browser sends cookie automatically
4. **API verifies JWT locally** using shared `AUTH_SECRET`
5. **Navbar updates** to show "Go to Dashboard" button

### Security Features

- ✅ **JWT Signature Verification** - Cryptographically secure tokens
- ✅ **Local Token Verification** - No external API calls needed
- ✅ **Rate Limiting** - 60 requests/minute per IP
- ✅ **httpOnly Cookies** - Protected from XSS attacks
- ✅ **Secure Cookies** - HTTPS-only in production
- ✅ **SameSite: lax** - CSRF protection
- ✅ **Security Headers** - CSP, HSTS, X-Frame-Options, etc.

### API Endpoints

#### `GET /api/auth/check`

Verifies user authentication status.

**Response (Authenticated):**

```json
{
  "authenticated": true,
  "user": {
    "username": "johndoe",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Response (Not Authenticated):**

```json
{
  "authenticated": false
}
```

**Rate Limit:** 60 requests/minute per IP

## 🎨 Customization

### Theme

The site supports light and dark modes. Theme configuration is in `app/layout.tsx`:

```tsx
<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
  {children}
</ThemeProvider>
```

### Colors & Styling

Tailwind configuration is in `tailwind.config.ts`. Colors are defined using CSS variables in `app/globals.css` for easy theme customization.

### Components

All UI components are in the `components/` directory:

- **Radix UI primitives** - `components/ui/`
- **Custom animations** - `components/animate-ui/` and `components/magic-ui/`
- **Page sections** - Root `components/` directory

## 📊 Performance

### Optimizations

- **Server Components** - Most components are React Server Components
- **Image Optimization** - Next.js automatic image optimization
- **Font Optimization** - Google Fonts with `next/font`
- **Code Splitting** - Automatic route-based code splitting
- **Turbopack** - Fast development and production builds

### Security Headers

Comprehensive security headers configured in `next.config.ts`:

- **Content-Security-Policy** - XSS protection
- **X-Frame-Options** - Clickjacking protection
- **X-Content-Type-Options** - MIME sniffing protection
- **Strict-Transport-Security** - HTTPS enforcement (HSTS)
- **Referrer-Policy** - Referrer information control
- **Permissions-Policy** - Browser feature permissions

## 🌐 Deployment

### Environment Variables

Ensure these variables are set in production:

```env
AUTH_SECRET=<production-secret>
NEXTAUTH_SECRET=<production-secret>
NODE_ENV=production
```

⚠️ **Critical:** `AUTH_SECRET` must be identical on both `crisper.io` and `app.crisper.io`

### Recommended Platforms

- **Vercel** (recommended) - Optimized for Next.js
- **Netlify** - Full Next.js support
- **AWS Amplify** - Managed hosting
- **Self-hosted** - Docker or Node.js server

### Pre-deployment Checklist

- [ ] `AUTH_SECRET` configured and matches app.crisper.io
- [ ] Environment variables set in hosting platform
- [ ] HTTPS enabled
- [ ] Domain DNS configured correctly
- [ ] Test authentication flow between domains
- [ ] Verify security headers in production
- [ ] Test rate limiting
- [ ] Check mobile responsiveness

## 🔗 Related Projects

- **app.crisper.io** - Main application dashboard (separate repository)
- Uses the same authentication system for seamless user experience

## 📝 Scripts

```bash
# Development with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm run start
```

The `dev` script also runs `next-video sync` in watch mode for video optimization.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🐛 Issues & Support

For bug reports and feature requests, please open an issue in the repository.

## 📚 Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Auth.js Documentation](https://authjs.dev/)
- [Radix UI Documentation](https://www.radix-ui.com/)

### Design Inspiration

- [shadcn/ui](https://ui.shadcn.com/)
- [Magic UI](https://magicui.design/)
- [Aceternity UI](https://ui.aceternity.com/)

---

**Built with ❤️ by the Crisper.io team**
