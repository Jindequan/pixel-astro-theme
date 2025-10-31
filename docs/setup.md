# 🚀 Setup Guide

## Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/pixel-astro-theme.git
cd pixel-astro-theme
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start Development Server

```bash
npm run dev
```

Open your browser and visit `http://localhost:4321` to see your pixel-themed blog!

## Initial Configuration

### 1. Site Information

Edit `src/config/site.ts`:

```typescript
export const defaultSiteConfig = {
  siteName: 'Your Pixel Blog',
  author: 'Your Name',
  siteDescription: 'A retro pixel-themed blog built with Astro',
  favicon: '/favicon.svg',

  // Theme colors (customize these!)
  themeColors: {
    primary: '#00ff00',
    secondary: '#00ffff',
    accent: '#ff8800',
    background: '#0a0a0a',
    text: '#00ff00'
  },

  // Social links
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
    { name: 'Twitter', url: 'https://x.com/yourusername', icon: 'twitter' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin' }
  ],

  // Footer links
  footerLinks: [
    { name: 'About', url: '/about' },
    { name: 'Privacy', url: '/privacy' },
    { name: 'Terms', url: '/terms' }
  ]
};
```

### 2. Add Your Content

Create blog posts in `src/content/blog/`:

```markdown
---
title: "Your First Blog Post"
description: "Welcome to your pixel-themed blog!"
publishDate: 2024-01-01
updateDate: 2024-01-01
author: "Your Name"
tags: ["welcome", "first-post"]
color: "#00ff00"
featured: true
draft: false
---

# Welcome to Your Pixel Blog!

This is your first blog post. Write in Markdown and enjoy the retro pixel aesthetic!
```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI directly
npm run check        # Type checking and linting
```

## Environment Variables

Create a `.env` file for environment-specific settings:

```bash
# Site configuration
PUBLIC_SITE_NAME="My Pixel Blog"
PUBLIC_SITE_URL="https://myblog.com"
PUBLIC_AUTHOR="Your Name"

# Analytics (optional)
PUBLIC_GA_ID="G-XXXXXXXXXX"
```

## Next Steps

1. **Customize colors** in `src/config/site.ts`
2. **Add your content** in `src/content/blog/`
3. **Modify pages** in `src/pages/`
4. **Customize components** in `src/components/`
5. **Deploy** your site!

## Troubleshooting

### Common Issues

**Port already in use:**
```bash
npm run dev -- --port 4322
```

**Build errors:**
```bash
rm -rf dist node_modules
npm install
npm run build
```

**Font not loading:**
- Check your internet connection
- Verify font imports in `BaseLayout.astro`
- Clear browser cache

### Getting Help

- Check the [Configuration Guide](configuration.md)
- Review [Theme Customization](themes.md)
- Open an issue on GitHub

## Development Tips

- **Hot reload** works automatically when editing files
- **TypeScript** provides full type checking
- **Astro dev tools** show component boundaries
- **Console logs** help debug issues
- **Inspect element** to explore styles

Happy coding with your pixel theme! 🎮