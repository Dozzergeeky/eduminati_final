# Deployment Guide for Eduminati Platform

This guide provides instructions for deploying the Eduminati online learning platform with hardcoded API keys maintained in the main files.

## Current Configuration

### Hardcoded API Keys (As Requested)
The application contains the following hardcoded credentials in main files:

1. **Google Gemini API Key** (in `components/Chatbot.tsx`):
   ```javascript
   const GEMINI_API_KEY = "AIzaSyCRasSBtZuUo2D_js8XUZL9p2oIgwzdKLM";
   ```

2. **MongoDB Connection String** (in `lib/mongodb.ts`):
   ```javascript
   const MONGODB_URI = "mongodb+srv://subhrasrimani2002:u3A9LipaovgJrxNJ@cluster.hr3bm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";
   ```

3. **Environment Variables** (in `.env`):
   ```
   DATABASE_URL="mongodb+srv://subhrasrimani2002:u3A9LipaovgJrxNJ@cluster.hr3bm.mongodb.net/payment?retryWrites=true&w=majority&appName=Cluster"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_YWNjZXB0ZWQtc25haWwtODguY2xlcmsuYWNjb3VudHMuZGV2JA"
   CLERK_SECRET_KEY="sk_test_example_1234567890abcdef"
   MONGODB_USERNAME="subhrasrimani2002"
   MONGODB_PASSWORD="u3A9LipaovgJrxNJ"
   ```

## Deployment Options

### 1. Vercel (Recommended for Next.js)

#### Quick Deploy Button
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Dozzergeeky/eduminati_final)

#### Manual Deployment
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from project root:
   ```bash
   vercel --prod
   ```

#### Environment Variables on Vercel
The `vercel.json` file is already configured with the hardcoded values. For production, you may want to update these through the Vercel dashboard.

### 2. Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=.next
   ```

### 3. Railway

1. Install Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```

2. Login and deploy:
   ```bash
   railway login
   railway link
   railway up
   ```

### 4. Docker Deployment

The application is configured with `output: 'standalone'` for Docker deployment:

1. Create a Dockerfile:
   ```dockerfile
   FROM node:18-alpine AS base
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   COPY package.json package-lock.json ./
   RUN npm ci

   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   FROM base AS runner
   WORKDIR /app
   ENV NODE_ENV production
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs

   COPY --from=builder /app/.next/standalone ./
   COPY --from=builder /app/.next/static ./.next/static

   USER nextjs
   EXPOSE 3000
   ENV PORT 3000
   CMD ["node", "server.js"]
   ```

2. Build and run:
   ```bash
   docker build -t eduminati .
   docker run -p 3000:3000 eduminati
   ```

## Build Verification

The application has been configured to build successfully with:
- ✅ Next.js 15.1.6 compatibility fixes
- ✅ Async params handling for dynamic routes
- ✅ Suspense boundaries for client-side hooks
- ✅ Font loading optimizations
- ✅ MongoDB connection with hardcoded credentials
- ✅ Google Gemini AI integration with hardcoded API key

## Build Output
```
Route (app)                                Size     First Load JS
┌ ○ /                                      14 kB           139 kB
├ ○ /_not-found                            979 B           106 kB
├ ƒ /api/advanced                          150 B           106 kB
├ ƒ /api/basic                             150 B           106 kB
├ ƒ /api/beginner                          150 B           106 kB
├ ƒ /api/courseData                        150 B           106 kB
├ ƒ /api/expert                            150 B           106 kB
├ ƒ /api/intermediate                      150 B           106 kB
├ ○ /courses                               4.09 kB         149 kB
├ ● /courses/[id]                          184 B           114 kB
├ ƒ /courses/[id]/prilim                   477 B           109 kB
├ ● /courses/[id]/prilim/learn             2.81 kB         121 kB
├ ● /courses/[id]/prilim/learn/assessment  2.1 kB          115 kB
├ ○ /instructors                           4.13 kB         149 kB
├ ○ /profile                               10.8 kB         159 kB
├ ƒ /sign-in/[[...sigin-in]]               723 B           136 kB
└ ƒ /sign-up/[[...sign-up]]                723 B           136 kB
```

## Post-Deployment Checklist

1. ✅ Verify MongoDB connection is working
2. ✅ Test Google Gemini AI chatbot functionality
3. ✅ Check user authentication with Clerk
4. ✅ Verify course data API endpoints
5. ✅ Test quiz/assessment functionality
6. ✅ Confirm responsive design on different devices

## Notes

- **Security**: The hardcoded API keys are maintained as requested, but for production use, consider rotating them periodically
- **Performance**: The application uses system fonts to avoid external font loading issues
- **Database**: MongoDB Atlas connection is configured with proper error handling
- **AI Integration**: Google Gemini API is properly integrated for the chatbot feature
- **Authentication**: Clerk is configured for user management

## Support

For deployment issues or questions, refer to the platform-specific documentation:
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Railway Documentation](https://docs.railway.app/)