# Changelog

All notable changes to the Crisper.io marketing website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Comprehensive README documentation with full tech stack and features
- CHANGELOG file for version tracking

## [0.1.0] - 2025-10-13

### Added

- Initial marketing website with Next.js 15 and React 19
- Cross-domain authentication system with app.crisper.io
- Auth.js (NextAuth v5) integration for secure authentication
- Hero section with animated beams and background effects
- Feature tabs showcasing platform capabilities:
  - AI Helpdesk
  - Chat Widget
  - Shared Inbox
  - Knowledge Base
  - Support CRM
  - Analytics
- Revenue calculator with interactive slider
- Responsive navigation with mobile menu
- Theme switcher (light/dark mode)
- FAQ accordion section
- Footer with newsletter subscription
- Bento grid layouts with animations
- Orbiting circles platform demo
- Animated list testimonials
- Mux video integration for feature demonstrations

### Security

- Rate limiting (60 requests/minute per IP) on auth endpoints
- Comprehensive security headers:
  - Content-Security-Policy
  - X-Frame-Options
  - X-Content-Type-Options
  - Strict-Transport-Security (HSTS)
  - Referrer-Policy
  - Permissions-Policy
- JWT token verification with local decoding
- Secure cookie configuration (httpOnly, secure, sameSite)
- Cross-domain authentication security

### Performance

- Turbopack for fast development and production builds
- Next.js Image optimization
- Server Components for reduced client-side JavaScript
- Font optimization with next/font
- Automatic code splitting

### UI/UX

- 60+ Radix UI components
- Motion (Framer Motion) animations throughout
- Glass morphism effects
- Responsive design for all screen sizes
- Accessible components with ARIA support
- Custom animated UI components (Magic UI, Animate UI)
- Smooth transitions and micro-interactions

### Technical

- TypeScript for type safety
- Tailwind CSS 4 for styling
- React Hook Form with Zod validation
- Custom hooks for mobile detection and controlled state
- Comprehensive component library
- PWA manifest and multiple favicon sizes

---

## Version History

### Version Numbering

We use Semantic Versioning (MAJOR.MINOR.PATCH):

- **MAJOR** - Breaking changes
- **MINOR** - New features (backwards compatible)
- **PATCH** - Bug fixes (backwards compatible)

### Change Categories

- **Added** - New features
- **Changed** - Changes to existing functionality
- **Deprecated** - Soon-to-be removed features
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Security improvements

---

## Migration Notes

### From NextAuth v4 to Auth.js (v5)

**Date: October 12, 2025**

Upgraded from NextAuth v4.24.11 to Auth.js v5.0.0-beta.29 to match app.crisper.io version.

**What Changed:**

- JWT encryption scheme updated (256-bit → 512-bit)
- Local token verification now possible
- Improved performance (no external API calls for auth check)
- Better TypeScript support
- Edge runtime compatibility

**Breaking Changes:**

- Auth configuration format updated
- JWT decode requires both `secret` and `salt` parameters
- Session cookie names environment-dependent

**Migration Steps:**

1. Updated package.json to next-auth@beta (v5.0.0-beta.29)
2. Modified `/api/auth/check` route to use local JWT decoding
3. Added salt parameter to decode function based on environment
4. Removed proxy logic to app.crisper.io
5. Maintained rate limiting and security features

---

## Upcoming Features

### Planned

- [ ] Blog section with MDX support
- [ ] Customer case studies/testimonials page
- [ ] Integration marketplace
- [ ] Interactive product tour
- [ ] Pricing comparison table
- [ ] Live chat widget
- [ ] Email capture with Resend integration
- [ ] Analytics dashboard preview

### Under Consideration

- [ ] Multi-language support (i18n)
- [ ] A/B testing framework
- [ ] Advanced SEO optimizations
- [ ] Service worker for offline support
- [ ] Progressive Web App (PWA) full implementation
- [ ] Accessibility audit and improvements

---

## Notes

For detailed security audit information and authentication implementation details, refer to:

- README.md - Complete documentation
- `/app/api/auth/check/route.ts` - Authentication endpoint implementation

For questions or issues, please open a GitHub issue or contact the development team.
