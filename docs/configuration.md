# 🔧 Configuration Reference

## Site Configuration

### Main Config: `src/config/site.ts`

```typescript
export const defaultSiteConfig = {
  // Basic site information
  siteName: string;           // Your site name
  author: string;             // Your name
  siteDescription: string;    // Site description
  favicon: string;            // Path to favicon

  // Theme colors
  themeColors: {
    primary: string;      // Main accent color
    secondary: string;    // Secondary accent color
    accent: string;       // Highlight color
    background: string;   // Background color
    text: string;         // Primary text color
  };

  // Social links
  socialLinks: Array<{
    name: string;
    url: string;
    icon: string;
  }>;

  // Footer links
  footerLinks: Array<{
    name: string;
    url: string;
  }>;
};
```

### Color Values

Use valid hex color codes:

```typescript
themeColors: {
  primary: '#00ff00',     // Green
  secondary: '#00ffff',   // Cyan
  accent: '#ff8800',      // Orange (visibility optimized)
  background: '#0a0a0a',  // Dark background
  text: '#00ff00'         // Green text
}
```

### Social Links

Configure your social media presence:

```typescript
socialLinks: [
  {
    name: 'GitHub',
    url: 'https://github.com/username',
    icon: 'github'
  },
  {
    name: 'Twitter',
    url: 'https://x.com/username',
    icon: 'twitter'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/username',
    icon: 'linkedin'
  }
]
```

### Footer Links

Add footer navigation:

```typescript
footerLinks: [
  { name: 'About', url: '/about' },
  { name: 'Privacy', url: '/privacy' },
  { name: 'Terms', url: '/terms' },
  { name: 'Contact', url: '/contact' }
]
```

## Content Configuration

### Blog Posts: `src/content/blog/`

Each blog post requires front matter:

```yaml
---
title: string              # Post title
description: string        # Post description
publishDate: Date         # Publication date
updateDate: Date          # Last update date
author: string            # Author name
tags: string[]           # Tags array
color: string            # Theme color for post
featured: boolean        # Featured post?
draft: boolean          # Draft mode?
---
```

### Required Fields

- `title`: Post title (required)
- `description`: Short description (required)
- `publishDate`: Publication date (required)

### Optional Fields

- `updateDate`: Last update date
- `author`: Author name (falls back to site config)
- `tags`: Array of tag strings
- `color`: Custom theme color for post
- `featured`: Show in featured section
- `draft`: Exclude from build

## Theme Configuration

### Theme System: `src/config/theme.ts`

The theme system manages colors and CSS generation:

```typescript
interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export const generateThemeCSSString = (colors: ThemeColors): string;
export const applyPredefinedTheme = (themeName: string): void;
```

### CSS Variables

The theme generates these CSS variables:

```css
:root {
  --pixel-cyan: var(--primary);
  --pixel-magenta: var(--secondary);
  --pixel-yellow: var(--accent);
  --pixel-green: var(--text);
  --pixel-orange: var(--accent);
  --pixel-red: #ff4444;
  --pixel-blue: #4444ff;
}
```

## Astro Configuration

### Main Config: `astro.config.mjs`

```javascript
export default defineConfig({
  output: 'static',
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

### Content Collections

Blog posts are managed through Astro content collections:

```javascript
// src/content/config.ts
export const collections = {
  blog: {
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.date(),
      // ... other fields
    })
  }
};
```

## Environment Variables

### Required Variables

Create `.env` file:

```bash
PUBLIC_SITE_NAME="My Pixel Blog"
PUBLIC_SITE_URL="https://myblog.com"
PUBLIC_AUTHOR="Your Name"
```

### Optional Variables

```bash
# Analytics
PUBLIC_GA_ID="G-XXXXXXXXXX"
PUBLIC_HOTJAR_ID="123456"

# API Keys
PUBLIC_API_URL="https://api.myblog.com"
```

## Build Configuration

### Package Scripts

```json
{
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro",
    "check": "astro check"
  }
}
```

### Output Configuration

- **Output Mode**: Static generation
- **Adapter**: Node.js with directory structure
- **Build Output**: `dist/` directory
- **Asset Handling**: Optimized automatically

## Development Settings

### TypeScript Configuration

`tsconfig.json`:

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Tailwind Configuration

`tailwind.config.js`:

```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['Doto', 'Sixtyfour', 'monospace']
      }
    }
  }
}
```

## Performance Settings

### Optimization Features

- **Static Generation**: Pre-built at build time
- **Image Optimization**: Automatic image processing
- **CSS Purging**: Unused styles removed
- **Font Loading**: Optimized font loading
- **Code Splitting**: Automatic code splitting

### Caching Configuration

```javascript
// Cache headers for static assets
const cacheHeaders = {
  'Cache-Control': 'public, max-age=31536000, immutable'
};
```

## Security Settings

### Content Security Policy

```javascript
// Example CSP headers
const csp = {
  'default-src': "'self'",
  'script-src': "'self' 'unsafe-inline'",
  'style-src': "'self' 'unsafe-inline'",
  'font-src': "'self' fonts.googleapis.com fonts.gstatic.com",
  'img-src': "'self' data: https:"
};
```

## Customization Examples

### Custom Component

Create custom components in `src/components/ui/`:

```astro
---
// src/components/ui/CustomComponent.astro
interface Props {
  title: string;
  color?: string;
}

const { title, color = 'var(--pixel-cyan)' } = Astro.props;
---

<div class="custom-component" style={`color: ${color};`}>
  <h2>{title}</h2>
</div>

<style>
  .custom-component {
    font-family: 'Doto', monospace;
    border: 2px solid currentColor;
    padding: 1rem;
  }
</style>
```

### Custom Page

Create pages in `src/pages/`:

```astro
---
// src/pages/custom.astro
import BaseLayout from '../components/layout/BaseLayout.astro';
import { getSiteConfig } from '../config/site';

const siteConfig = getSiteConfig();
---

<BaseLayout title="Custom Page" particleColor={siteConfig.themeColors.primary}>
  <main>
    <h1>Custom Page</h1>
    <p>Your custom content here</p>
  </main>
</BaseLayout>
```

## Troubleshooting

### Common Configuration Issues

**Theme colors not applying:**
- Check `src/config/site.ts` syntax
- Verify hex color format (#RRGGBB)
- Clear browser cache

**Build errors:**
- Run `astro check` for type checking
- Verify all required fields in content
- Check for circular dependencies

**Missing fonts:**
- Verify internet connection
- Check font imports in BaseLayout
- Clear font cache

### Debug Mode

Enable debug logging:

```javascript
// In your component
console.log('Theme colors:', siteConfig.themeColors);
console.log('Current theme:', document.documentElement.getAttribute('data-theme'));
```

This configuration system provides maximum flexibility while maintaining simplicity and type safety! 🚀