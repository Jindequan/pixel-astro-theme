# Site Configuration Guide

This configuration system allows you to easily customize various website settings, including site information, theme colors, social links, and more.

## Configuration File Location

The main configuration file is located at: `src/config/site.ts`

## Configuration Options

### Basic Information

```typescript
siteName: 'PIXEL ASTRO',           // Website name
siteDescription: 'Website description', // Website description
author: 'Your Name',                 // Author name
url: 'https://your-domain.com',    // Website URL
```

### Theme Color Configuration

```typescript
themeColors: {
  primary: '#00ff00',      // Primary color (buttons, links, etc.)
  secondary: '#00ffff',    // Secondary color (decorative elements)
  accent: '#ff8800',       // Accent color (highlight elements)
  background: '#0a0a0a',   // Background color
  text: '#00ff00'          // Text color
}
```

### Social Links Configuration

```typescript
socialLinks: [
  {
    name: 'GitHub',                                    // Display name
    url: 'https://github.com/yourusername',           // Link URL
    icon: '🐙'                                        // Icon (emoji or text)
  },
  {
    name: 'Twitter',
    url: 'https://x.com/yourusername',
    icon: '𝕏'
  },
  {
    name: 'Bilibili',
    url: 'https://space.bilibili.com/youruserid',
    icon: '📺'
  },
  {
    name: 'Email',
    url: 'mailto:your-email@example.com',
    icon: '✉️'
  }
]
```

### Footer Links Configuration

```typescript
footerLinks: [
  {
    name: 'Astro Docs',                    // Display name
    url: 'https://docs.astro.build'        // Link URL
  },
  {
    name: 'Doto Font',
    url: 'https://fonts.google.com/specimen/Doto'
  }
]
```

### Other Settings

```typescript
favicon: '/favicon.svg',          // Website icon path
defaultAuthor: 'Liu Zan',         // Default author name
enableDarkMode: true,             // Enable dark/light theme toggle
enableAnimations: true            // Enable animation effects
```

## Environment Variable Override

You can use environment variables to override some configurations:

```bash
PUBLIC_SITE_NAME="My Website"
PUBLIC_SITE_URL="https://my-domain.com"
PUBLIC_AUTHOR="My Name"
```

## Preset Themes

The system includes several preset themes:

```typescript
import { ThemeManager } from '../config/theme';

const themeManager = ThemeManager.getInstance();

// Apply preset themes
themeManager.applyPredefinedTheme('neon');      // Neon (default)
themeManager.applyPredefinedTheme('sunset');    // Sunset
themeManager.applyPredefinedTheme('ocean');     // Ocean
themeManager.applyPredefinedTheme('forest');    // Forest
themeManager.applyPredefinedTheme('purple');    // Purple
themeManager.applyPredefinedTheme('cyberpunk'); // Cyberpunk
```

## Custom Favicon

1. Place your favicon file in the `public/` directory
2. Set the path in configuration:

```typescript
favicon: '/my-custom-favicon.svg'
```

Supported formats:
- `.svg` (recommended, supports animations and theme color adaptation)
- `.png` (fallback format)
- `.ico` (traditional format)

## Configuration Validation

The system automatically validates configuration correctness, including:
- Required field checks
- URL format validation
- Color format validation

If configuration is incorrect, detailed error messages will be displayed during build.

## Example: Custom Theme

To create a blue theme:

```typescript
themeColors: {
  primary: '#0066ff',      // Blue primary color
  secondary: '#00aaff',    // Light blue
  accent: '#ffaa00',       // Orange accent
  background: '#0a0a1a',   // Dark blue background
  text: '#0099ff'          // Blue text
}
```

## Notes

1. Restart the development server after modifying configuration
2. Color values support hex, RGB, RGBA, and CSS color names
3. Social links are automatically displayed in the footer
4. All links open in new tabs
5. Icons are recommended to use emoji or simple text symbols