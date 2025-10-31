# Pixel Astro Theme

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F41NO3SK)

<div align="center">

**🎮 Retro pixel-themed Astro blog with true pixel fonts and particle effects**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Astro Version](https://img.shields.io/badge/Astro-4.0+-orange.svg)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue.svg)](https://www.typescriptlang.org/)

</div>

## ✨ Features

- 🎮 **True Pixel Fonts** - Authentic retro gaming aesthetic with Doto and Sixtyfour fonts
- 🌟 **Particle Effects** - Dynamic particle background system with theme integration
- 🎨 **Smart Themes** - Automatic color contrast and 6+ preset themes
- 🌓 **Dark/Light Mode** - Smooth theme switching with pixel-perfect controls
- 📱 **Fully Responsive** - Mobile-first pixel design
- ⚡ **Performance Optimized** - Fast loading with Astro's static generation
- 🔧 **Highly Configurable** - Simple yet powerful configuration system
- 📝 **Markdown Support** - Full MDX and standard Markdown support
- 🎵 **Media Integration** - Audio and video components with pixel styling
- 🛠️ **TypeScript** - Complete type safety and IntelliSense support

## 🚀 Quick Start

```bash
# Clone and setup
git clone https://github.com/yourusername/pixel-astro-theme.git
cd pixel-astro-theme
npm install

# Start development
npm run dev
# Visit http://localhost:4321

# Build for production
npm run build
npm run preview
```

## ⚙️ Configuration

Edit `src/config/site.ts` to customize your site:

```typescript
export const defaultSiteConfig = {
  siteName: 'Your Site Name',
  author: 'Your Name',
  siteDescription: 'Your retro pixel blog',

  themeColors: {
    primary: '#00ff00',    // Main accent color
    secondary: '#00ffff',  // Secondary accent
    accent: '#ff8800',     // Orange accent (optimized for visibility)
    background: '#0a0a0a', // Dark background
    text: '#00ff00'        // Primary text
  },

  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
    { name: 'Twitter', url: 'https://x.com/yourusername', icon: 'twitter' }
  ]
};
```

## 🎨 Theme Features

### Preset Themes
- `neon` - Classic green terminal
- `sunset` - Warm orange sunset
- `ocean` - Cool blue ocean
- `forest` - Natural green forest
- `purple` - Royal purple theme
- `cyberpunk` - Neon cyberpunk

### Smart Color System
- Automatic contrast detection for readable text
- Day/night mode optimized colors
- Pixel-perfect color rendering
- Consistent theming across all components

## 📁 Project Structure

```
pixel-astro-theme/
├── src/
│   ├── config/              # Site configuration
│   ├── components/          # Astro components
│   │   ├── layout/          # Layout components
│   │   └── ui/              # UI components
│   ├── pages/               # Pages and routing
│   ├── content/             # Content collections
│   └── styles/              # Global styles
├── public/                  # Static assets
└── docs/                    # Additional documentation
```

## 🛠️ Development

```bash
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview build
npm run astro        # Astro CLI
```

## 📖 Documentation

- [🚀 Setup Guide](docs/setup.md) - Detailed installation and setup
- [🎨 Theme Customization](docs/themes.md) - Theme system guide
- [📝 Content Management](docs/content.md) - Managing blog content
- [🔧 Configuration](docs/configuration.md) - Complete configuration reference
- [🚀 Deployment](docs/deployment.md) - Build and deployment guide

## 🌐 Browser Support

- Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## 📄 License

MIT License - see [LICENSE](LICENSE) file.

## 🙏 Acknowledgments

- [Astro](https://astro.build/) - Modern web framework
- [Doto Font](https://fonts.google.com/specimen/Doto) - Pixel-perfect font
- [Sixtyfour Font](https://fonts.google.com/specimen/Sixtyfour) - Retro gaming font

---

<div align="center">
  <sub>Built with ❤️ using Astro and Pixel Fonts</sub>
</div>