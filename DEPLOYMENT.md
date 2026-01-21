# Deployment Guide

This guide covers multiple deployment options for your portfolio website.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications with zero configuration.

### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/in with GitHub
   - Click "New Project"
   - Import your repository

3. **Configure Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

### Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

## 🌐 Netlify

### Steps:

1. **Build for Static Export**
   Update `next.config.js`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   module.exports = nextConfig
   ```

2. **Add Build Script**
   Update `package.json`:
   ```json
   {
     "scripts": {
       "build": "next build",
       "export": "next export"
     }
   }
   ```

3. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build && npm run export`
     - Publish directory: `out`

4. **Configure Redirects**
   Create `public/_redirects`:
   ```
   /*    /index.html   200
   ```

## 📄 GitHub Pages

### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build && npm run export",
       "deploy": "gh-pages -d out"
     }
   }
   ```

3. **Update next.config.js**
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/repository-name',
     assetPrefix: '/repository-name/',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 🐳 Docker Deployment

### Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Docker Compose
```yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

## ☁️ AWS S3 + CloudFront

### Steps:

1. **Build Static Site**
   ```bash
   npm run build
   npm run export
   ```

2. **Create S3 Bucket**
   - Enable static website hosting
   - Upload `out/` folder contents

3. **Configure CloudFront**
   - Create distribution
   - Point to S3 bucket
   - Configure custom domain

4. **Automate with GitHub Actions**
   ```yaml
   name: Deploy to AWS
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Setup Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '18'
         - name: Install dependencies
           run: npm ci
         - name: Build
           run: npm run build && npm run export
         - name: Deploy to S3
           run: aws s3 sync out/ s3://your-bucket-name --delete
           env:
             AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
             AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
   ```

## 🔧 Environment Variables

For production deployments, you may need to set environment variables:

### Vercel
- Go to Project Settings → Environment Variables
- Add variables as needed

### Netlify
- Go to Site Settings → Environment Variables
- Add variables in the dashboard

### Common Variables
```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📊 Performance Optimization

### Before Deployment
1. **Optimize Images**
   - Compress all images
   - Use WebP format when possible
   - Implement lazy loading

2. **Bundle Analysis**
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```
   
   Update `next.config.js`:
   ```javascript
   const withBundleAnalyzer = require('@next/bundle-analyzer')({
     enabled: process.env.ANALYZE === 'true',
   })
   
   module.exports = withBundleAnalyzer(nextConfig)
   ```

3. **Run Analysis**
   ```bash
   ANALYZE=true npm run build
   ```

### Post-Deployment
1. **Monitor Core Web Vitals**
2. **Set up error tracking**
3. **Configure analytics**
4. **Monitor performance metrics**

## 🔒 Security Considerations

### Headers Configuration
Add to `next.config.js`:
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

### Content Security Policy
```javascript
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self';
`

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  }
]
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Clear `.next` folder and rebuild
   - Verify all dependencies are installed

2. **3D Elements Not Loading**
   - Ensure Three.js dependencies are properly installed
   - Check for WebGL support in target browsers
   - Implement fallbacks for unsupported devices

3. **Image Optimization Issues**
   - For static exports, set `images.unoptimized: true`
   - Use absolute URLs for external images
   - Verify image paths are correct

4. **Routing Issues**
   - For static hosting, configure redirects properly
   - Use `trailingSlash: true` for static exports
   - Check `basePath` configuration for subdirectory deployments

### Debug Commands
```bash
# Check build output
npm run build

# Analyze bundle size
npm run analyze

# Test production build locally
npm run start

# Check for TypeScript errors
npx tsc --noEmit
```

## 📞 Support

If you encounter issues during deployment:

1. Check the deployment platform's documentation
2. Review build logs for specific errors
3. Test the build locally first
4. Ensure all environment variables are set correctly

For platform-specific help:
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)