# 🚀 Deployment Guide

## Overview

Pixel Astro Theme is optimized for static site generation and can be deployed to any modern hosting platform. This guide covers the most popular deployment options.

## Build Process

### Local Build

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build
npm run preview
```

### Build Output

The build process creates:

```
dist/
├── index.html
├── about/
│   └── index.html
├── articles/
│   ├── index.html
│   ├── page/
│   │   └── 2/
│   │       └── index.html
│   └── post-slug/
│       └── index.html
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── favicon.svg
```

## Deployment Platforms

### Vercel (Recommended)

#### Quick Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Automatic Deployment

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Node Version**: `18.x` or higher

#### Environment Variables

```bash
# In Vercel dashboard
PUBLIC_SITE_NAME="My Pixel Blog"
PUBLIC_SITE_URL="https://yourblog.vercel.app"
PUBLIC_AUTHOR="Your Name"
```

### Netlify

#### Drag and Drop

1. Run `npm run build`
2. Drag the `dist/` folder to Netlify

#### Git Integration

1. Connect repository to Netlify
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

#### Netlify Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### GitHub Pages

#### Manual Deployment

```bash
# Build
npm run build

# Deploy to gh-pages branch
npm install -gh-pages
npx gh-pages -d dist
```

#### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v4

    - name: Setup Node
      uses: actions/setup-node@v4
      with:
        node-version: '18'

    - name: Setup Pages
      uses: actions/configure-pages@v4

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v4
```

#### Astro Configuration

Update `astro.config.mjs`:

```javascript
export default defineConfig({
  output: 'static',
  base: '/your-repo-name/',  # Add this for GitHub Pages
  adapter: node({
    mode: 'directory'
  }),
  vite: {
    define: {
      global: 'globalThis'
    }
  }
});
```

### Cloudflare Pages

#### Direct Deploy

1. Connect your Git repository
2. Configure build:
   - **Framework preset**: `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: `18`

#### Environment Variables

```bash
# In Cloudflare dashboard
PUBLIC_SITE_NAME="My Pixel Blog"
PUBLIC_SITE_URL="https://yourblog.pages.dev"
```

### DigitalOcean App Platform

1. Create new app from GitHub
2. Configure build:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Node Version**: `18`

## Custom Server Deployment

### Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Create `nginx.conf`:

```nginx
events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ $uri.html =404;
        }

        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
```

### Traditional VPS

#### Using Nginx

```bash
# Build and copy files
npm run build
sudo cp -r dist/* /var/www/html/

# Nginx configuration
sudo nano /etc/nginx/sites-available/pixel-blog
```

Nginx site config:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;

    # Cache static files
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Domain Configuration

### Custom Domain

#### DNS Settings

```
A Record: @ -> 192.0.2.1
A Record: www -> 192.0.2.1
CNAME: www -> yourdomain.com
```

#### SSL Certificate

Most platforms provide automatic SSL. For manual setup:

```bash
# Using Certbot
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Performance Optimization

### Build Optimization

The theme includes optimizations:

- **Image optimization** with Astro
- **CSS purging** with Tailwind
- **Code splitting** automatic
- **Font loading** optimization

### CDN Configuration

```javascript
// In astro.config.mjs
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]'
        }
      }
    }
  }
});
```

### Caching Strategy

```javascript
// Cache headers for static assets
const cacheHeaders = {
  'Cache-Control': 'public, max-age=31536000, immutable'
};

// Cache headers for HTML
const htmlCacheHeaders = {
  'Cache-Control': 'public, max-age=0, must-revalidate'
};
```

## Environment Variables

### Production Variables

```bash
# Required
PUBLIC_SITE_NAME="Your Pixel Blog"
PUBLIC_SITE_URL="https://yourdomain.com"
PUBLIC_AUTHOR="Your Name"

# Optional
PUBLIC_GA_ID="G-XXXXXXXXXX"
PUBLIC_HOTJAR_ID="123456"
```

### Development Variables

```bash
# .env.local
PUBLIC_SITE_NAME="Dev Blog"
PUBLIC_SITE_URL="http://localhost:4321"
```

## Monitoring and Analytics

### Google Analytics

```astro
---
// In your layout component
const GA_ID = import.meta.env.PUBLIC_GA_ID;
---

{GA_ID && (
  <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '{GA_ID}');
  </script>
)}
```

### Performance Monitoring

```javascript
// Web Vitals monitoring
function sendToAnalytics(metric) {
  // Send to your analytics service
  gtag('event', metric.name, {
    value: Math.round(metric.value),
    event_category: 'Web Vitals'
  });
}
```

## Troubleshooting

### Common Issues

**Build fails:**
```bash
# Clear cache
rm -rf dist node_modules
npm install
npm run build
```

**404 errors:**
- Check `base` configuration in astro.config.mjs
- Verify server configuration for SPA routing
- Check file permissions

**Styles not loading:**
- Verify CSS build process
- Check asset paths in HTML
- Clear browser cache

**Images not displaying:**
- Verify image paths in `public/` folder
- Check image file formats
- Verify image optimization

### Debug Mode

```bash
# Verbose build output
npm run build -- --verbose

# Astro development mode with debug
DEBUG=astro:* npm run dev
```

### Performance Debugging

```javascript
// Log performance metrics
console.log('Page load time:', performance.now());
console.log('Bundle size:', performance.getEntriesByType('navigation'));
```

## Deployment Checklist

### Pre-Deployment

- [ ] Update `siteName` and `author` in config
- [ ] Set correct `siteUrl` for production
- [ ] Add analytics tracking ID
- [ ] Test build locally (`npm run build`)
- [ ] Check all links work correctly
- [ ] Verify images load properly
- [ ] Test mobile responsiveness
- [ ] Validate HTML and CSS

### Post-Deployment

- [ ] Test all pages load correctly
- [ ] Check analytics are working
- [ ] Verify SSL certificate
- [ ] Test mobile performance
- [ ] Check Core Web Vitals
- [ ] Validate SEO metadata
- [ ] Test social sharing cards

### Ongoing Maintenance

- [ ] Monitor site performance
- [ ] Update dependencies regularly
- [ ] Backup content and configuration
- [ ] Check for broken links
- [ ] Review analytics data
- [ ] Update security headers

Your pixel-perfect blog is now ready for deployment! 🚀🎮