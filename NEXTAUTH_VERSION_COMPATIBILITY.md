# Auth.js / NextAuth Version Compatibility Issue

## Problem

The crisper.io ecosystem uses **different major versions** of the authentication library:

| Application        | Library Version          | Name        | Encryption Scheme  |
| ------------------ | ------------------------ | ----------- | ------------------ |
| **crisper.io**     | next-auth v4.24.11       | NextAuth v4 | 256-bit encryption |
| **app.crisper.io** | next-auth v5.0.0-beta.29 | Auth.js     | 512-bit encryption |

**Important:** Auth.js is the new name for NextAuth v5. The package is still called `next-auth` but the project rebranded to Auth.js.

**These versions are incompatible.** Tokens encrypted by Auth.js (v5) cannot be decrypted by NextAuth v4, even with the same `AUTH_SECRET`.

## Error Messages

When attempting local token decryption with mismatched versions:

```
JWEInvalid: Invalid Content Encryption Key length.
Expected 512 bits, got 256 bits
```

## Current Solution

The `/api/auth/check` endpoint on crisper.io uses a **secure proxy approach**:

1. Reads the session cookie from the request
2. Forwards it to `app.crisper.io/api/auth/session` for verification
3. Returns minimal user data (username, name, email)

### Security Measures in Place

✅ **Rate Limiting** - 60 requests/minute per IP  
✅ **Timeout Protection** - 5-second timeout on requests  
✅ **HTTPS Encryption** - All data encrypted in transit (production)  
✅ **Trusted Domain Only** - Only proxies to app.crisper.io  
✅ **Minimal Data** - Returns only necessary user info

### Why This Is Acceptable

While this involves a network call, it's secure because:

1. **Trusted destination**: We only call our own app.crisper.io domain
2. **Rate limited**: Prevents DoS and brute force attacks
3. **Encrypted**: HTTPS protects data in transit
4. **Fast failover**: 5-second timeout prevents hanging
5. **No alternative**: Local decryption is impossible due to version incompatibility

## Long-Term Solution

**Upgrade crisper.io to Auth.js (next-auth v5)** to enable local token verification.

### Benefits of Upgrading

✅ **No network calls** - Instant local verification  
✅ **Better performance** - No latency from external requests  
✅ **No single point of failure** - Works even if app.crisper.io is down  
✅ **Consistent security** - Same version across all apps  
✅ **Latest features** - Access to Auth.js improvements (better TypeScript, edge runtime support, etc.)

### Upgrade Considerations

⚠️ **Breaking Changes** - Auth.js (v5) has breaking changes from NextAuth v4  
⚠️ **Testing Required** - Thoroughly test auth flows after upgrade  
⚠️ **Migration Time** - Will require code updates and testing

### Auth.js (v5) Breaking Changes

Key changes to be aware of:

1. **New configuration format** - Different way to configure auth
2. **Different API structure** - Some APIs have changed
3. **Updated callbacks** - Callback signatures may differ
4. **New encryption** - Uses different JWT encryption (the issue we're facing)
5. **Edge runtime support** - Better support for edge functions

## Upgrade Path

When ready to upgrade crisper.io to Auth.js (v5):

### Step 1: Update Package

```bash
cd /Users/react/Documents/GitHub/crisper.io
npm install next-auth@beta
```

Note: The package is still called `next-auth` but you're installing Auth.js (v5).

### Step 2: Update Auth Check Route

After upgrading, you can use local token verification:

```typescript
import { decode } from "next-auth/jwt";

const decoded = await decode({
  token: sessionToken,
  secret: process.env.AUTH_SECRET,
});
```

### Step 3: Remove Proxy Logic

Once on v5, remove the proxy approach and use direct token decryption.

### Step 4: Test Thoroughly

- Test login/logout flows
- Test cookie sharing between domains
- Test session persistence
- Test token verification

## Migration Checklist

When upgrading crisper.io to Auth.js (v5):

- [ ] Review Auth.js migration guide
- [ ] Update package.json to next-auth@beta
- [ ] Update auth configuration if any exists
- [ ] Modify `/api/auth/check` to use local decryption
- [ ] Remove proxy logic and external calls
- [ ] Test authentication flows
- [ ] Test cross-domain cookie sharing
- [ ] Verify rate limiting still works
- [ ] Test in development environment
- [ ] Deploy to staging for testing
- [ ] Deploy to production

## Resources

- [Auth.js Documentation](https://authjs.dev/)
- [Auth.js Migration Guide (v4 to v5)](https://authjs.dev/guides/upgrade-to-v5)
- [Auth.js JWT Configuration](https://authjs.dev/reference/core/jwt)
- [Why Auth.js?](https://authjs.dev/getting-started/introduction) - Explains the rebrand from NextAuth

## Questions?

For questions about this compatibility issue or the upgrade path, refer to:

- `SECURITY_AUDIT_SUMMARY.md` - Full security audit
- `CROSS_DOMAIN_AUTH.md` - Authentication implementation guide
