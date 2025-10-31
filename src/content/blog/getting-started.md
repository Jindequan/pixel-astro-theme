---
title: "Getting Started with Pixel Astro Theme"
description: "Complete beginner's guide to setting up and customizing your pixel-themed Astro blog"
publishDate: 2025-01-15
updateDate: 2025-01-20
tags: ["tutorial", "beginner", "setup", "configuration", "getting-started"]
author: "Liu Zan"
featured: true
color: "#00ff00"
draft: false
---

# Getting Started with Pixel Astro Theme

Welcome to the complete beginner's guide for Pixel Astro Theme! This theme brings authentic retro gaming aesthetics to modern web development with true pixel fonts and particle effects.

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have:

- **Node.js 18.0.0** or higher
- **npm** or **yarn** package manager
- **Git** for version control
- **Basic knowledge** of web development

### Quick Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jindequan/pixel-astro-theme.git
   cd pixel-astro-theme
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Visit your site**
   Open [http://localhost:4322](http://localhost:4322) in your browser

## 🎨 Basic Configuration

### Site Information

Edit `src/config/site.ts` to customize your site:

```typescript
export const defaultSiteConfig = {
  siteName: 'Your Pixel Blog',
  siteDescription: 'A retro gaming themed blog',
  author: 'Your Name',
  url: 'https://yourdomain.com',

  themeColors: {
    primary: '#00ff00',    // Your brand color
    secondary: '#00ffff',  // Secondary accent
    accent: '#ffff00',     // Highlight color
    background: '#0a0a0a', // Background
    text: '#00ff00'        // Text color
  },

  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/yourname', icon: '🐙' },
    { name: 'Twitter', url: 'https://x.com/yourname', icon: '𝕏' },
    // Add more social links...
  ]
};
```

### Theme Customization

Choose from 6 built-in themes:

```typescript
// Apply preset themes
themeManager.applyPredefinedTheme('neon');      // Green neon
themeManager.applyPredefinedTheme('sunset');    // Orange sunset
themeManager.applyPredefinedTheme('ocean');     // Blue ocean
themeManager.applyPredefinedTheme('forest');    // Green forest
themeManager.applyPredefinedTheme('purple');    // Purple theme
themeManager.applyPredefinedTheme('cyberpunk'); // Cyberpunk colors
```

## 📁 Project Structure

Understanding the project structure helps you customize effectively:

```
pixel-astro-theme/
├── src/
│   ├── config/              # Configuration files
│   │   ├── site.ts          # Main site configuration
│   │   ├── theme.ts         # Theme management
│   │   └── types.ts         # TypeScript definitions
│   ├── components/
│   │   ├── layout/          # Layout components
│   │   │   └── BaseLayout.astro
│   │   └── ui/              # UI components
│   │       ├── Header.astro
│   │       ├── Footer.astro
│   │       ├── Button.astro
│   │       └── Card.astro
│   ├── pages/               # Page components
│   │   ├── index.astro      # Home page
│   │   ├── about.astro      # About page
│   │   ├── docs.astro       # Documentation
│   │   └── articles/         # Blog articles
│   ├── content/             # Content collections
│   │   └── blog/             # Blog posts
│   └── styles/              # CSS files
│       └── global.css        # Global styles
├── public/                  # Static assets
└── docs/                    # Documentation
```

## 📝 Creating Your First Blog Post

### Content Collections

Blog posts are stored in `src/content/blog/` with front matter:

```markdown
---
title: "Your Post Title"
description: "Brief description"
publishDate: 2025-01-15
tags: ["tag1", "tag2", "tag3"]
author: "Your Name"
featured: false
color: "#00ff00"
draft: false
---

# Your content here...
```

### MDX vs Markdown

You have two options for content:

**Markdown** (simpler):
- Pure Markdown syntax
- No custom components
- Great for text-heavy posts

**MDX** (more powerful):
- Custom Astro components
- Interactive elements
- Video, audio, and gallery support

## 🎭 Custom Components

The theme includes several useful components:

### Button Component

```astro
import Button from '../components/ui/Button.astro';

<Button
  href="/your-link"
  variant="primary"
  size="lg"
  glowColor="#00ff00"
>
  Click Me!
</Button>
```

### Card Component

```astro
import Card from '../components/ui/Card.astro';

<Card
  title="Card Title"
  description="Card description"
  glowColor="#00ffff"
  href="/more-info"
/>
```

### Video Component (MDX only)

```astro
import Video from '../components/ui/Video.astro';

Video
  videoId="dQw4w9WgXcQ"
  platform="youtube"
  title="Video Title"
/>
```

## 🌟 Advanced Features

### Particle Effects

The theme includes dynamic particle backgrounds that:

- Respond to theme colors
- Perform smoothly on all devices
- Can be customized via configuration

### Theme Switching

Built-in dark/light mode with:

- Smooth transitions
- Persistent user preferences
- Automatic system detection

### Font Scaling

Users can adjust font size with:

- Slider control in header
- Pixel-perfect scaling
- Maintains pixel aesthetics

## 🔧 Development Workflow

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

### Environment Variables

Create a `.env` file for environment-specific settings:

```bash
PUBLIC_SITE_NAME="My Blog"
PUBLIC_SITE_URL="https://myblog.com"
PUBLIC_AUTHOR="My Name"
```

### Development Tips

1. **Use TypeScript** for type safety
2. **Follow the existing code style**
3. **Test in multiple browsers**
4. **Check mobile responsiveness**
5. **Validate HTML and CSS**

## 📱 Mobile Optimization

The theme is fully responsive with:

- **Mobile-first design** approach
- **Touch-friendly** navigation
- **Optimized performance** for mobile
- **Pixel-perfect** display on all devices

## 🎨 Customization Examples

### Custom Color Scheme

Create your own theme:

```typescript
themeColors: {
  primary: '#ff6b35',      // Orange primary
  secondary: '#f7931e',    // Gold secondary
  accent: '#ffcd3c',       // Yellow accent
  background: '#1a0f0a',   // Dark background
  text: '#ff8c42'          // Orange text
}
```

### Custom Footer Links

Add your own links:

```typescript
footerLinks: [
  { name: 'Your Link', url: 'https://yoursite.com' },
  { name: 'Another Link', url: 'https://anothersite.com' }
]
```

### Favicon Customization

Replace the default favicon:

1. Create your favicon in `public/`
2. Update the path in configuration:

```typescript
favicon: '/your-custom-favicon.svg'
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

1. **Netlify** (recommended)
2. **Vercel**
3. **GitHub Pages**
4. **Any static hosting**

### Environment Configuration

Configure your production environment:

```bash
PUBLIC_SITE_URL="https://yourproductiondomain.com"
PUBLIC_SITE_NAME="Your Production Site"
```

## 📚 Next Steps

Now that you're set up, explore these topics:

- **[Markdown Format Guide](/articles/markdown-example)** - Content creation
- **[Multimedia Integration](/articles/multimedia-showcase)** - Media handling
- **[Theme Customization](/docs/theme-customization)** - Advanced styling
- **[Contributing Guide](/CONTRIBUTING.md)** - How to contribute

## 🎉 Conclusion

You're now ready to create amazing pixel-themed content! The Pixel Astro Theme provides:

- ✅ **Authentic retro aesthetics**
- ✅ **Easy customization**
- ✅ **Modern performance**
- ✅ **Full responsiveness**
- ✅ **Open source freedom**

Happy blogging! 🎮

---

**Need help?** Check our [documentation](/docs) or open an [issue](https://github.com/Jindequan/pixel-astro-theme/issues).