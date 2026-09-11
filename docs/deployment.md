# Deployment & Operational Guide — G & S Engineering

## Production Build & Verification

```bash
# 1. Install dependencies
npm install

# 2. Run lint check
npm run lint

# 3. Execute TypeScript & Next.js production build
npm run build

# 4. Start production server locally
npm run start
```

## Environment Variables
Ensure `NEXT_PUBLIC_SITE_URL` is set in your production host environment (e.g., Vercel, AWS Amplify, or Docker container).

```bash
NEXT_PUBLIC_SITE_URL=https://www.gsengineering.com.au
```
