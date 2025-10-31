---
title: "Theme Configuration Guide"
description: "Complete guide to customize your Pixel Astro Theme colors and settings"
publishDate: 2024-01-25
tags: ["configuration", "theme", "customization", "colors"]
author: "Pixel Astro Team"
featured: true
color: "#00ff00"
---

# 🎨 Theme Configuration Guide

Complete guide to customize your Pixel Astro Theme colors and settings.

## ⚡ Quick Configuration

### 🚀 5-Minute Setup

Edit your main configuration file: `src/config/site.ts`

#### 1. Site Information
```typescript
siteName: 'Your Site Name'
author: 'Your Name'
siteDescription: 'Your description'
url: 'https://yoursite.com'
```

#### 2. Theme Colors
```typescript
themeColors: {
  primary: '#00ff00',    // Main color (neon green)
  secondary: '#00ffff',  // Secondary color (neon cyan)
  accent: '#ff8800'      // Accent color (deep orange)
}
```

#### 3. Social Links
```typescript
socialLinks: [
  { name: 'GitHub', url: 'https://github.com/yourname', icon: 'github' },
  { name: 'X', url: 'https://x.com/yourname', icon: 'x' },
  { name: 'Email', url: 'mailto:your@email.com', icon: 'email' }
]
```

✅ **That's it!** Restart your dev server and see the changes!

## 🎨 Advanced Color Configuration

### Color System Overview

The theme uses a dual-layer color system:

- **📝 Configuration Layer**: Basic theme colors in config file
- **🎨 CSS Variable Layer**: Detailed colors for different modes

### Day/Night Mode Colors

The theme automatically adjusts colors for day/night modes. Edit these in `src/components/layout/BaseLayout.astro`:

#### Day Mode Colors
```css
:root {
  --pixel-cyan: #008b8b;    /* Dark cyan */
  --pixel-yellow: #ff8c00;  /* Dark orange */
  --pixel-green: #006400;   /* Dark green */
}
```

#### Night Mode Colors
```css
[data-theme="dark"] {
  --pixel-cyan: #00ffff;    /* Bright cyan */
  --pixel-yellow: #ffaa00;  /* Bright orange */
  --pixel-green: #00ff00;   /* Bright green */
}
```

## 🌈 Color Customization Examples

### Example 1: Purple Theme

**Configuration (`src/config/site.ts`)**:
```typescript
themeColors: {
  primary: '#ff00ff',      // Purple
  secondary: '#00ffff',    // Cyan
  accent: '#ffaa00'        // Orange
}
```

**CSS Variables (`BaseLayout.astro`)**:
```css
:root {
  --pixel-cyan: #8b008b;    /* Dark purple */
  --pixel-yellow: #ff8c00;   /* Dark orange */
}

[data-theme="dark"] {
  --pixel-cyan: #ff00ff;    /* Bright purple */
  --pixel-yellow: #ffaa00;   /* Bright orange */
}
```

### Example 2: Blue Theme

**Configuration**:
```typescript
themeColors: {
  primary: '#0080ff',      // Blue
  secondary: '#00ffff',    // Cyan
  accent: '#ffff00'        // Yellow
}
```

### Example 3: Retro Green Theme

**Configuration**:
```typescript
themeColors: {
  primary: '#00ff41',      // Matrix green
  secondary: '#00cc33',    // Dark green
  accent: '#ff6600'        // Orange
}
```

## 🔧 Component Customization

### 🔄 Theme Toggle Button

Customize the day/night toggle appearance in `src/components/ui/Header.astro`:

```javascript
// Button size (40x20px rectangle)
width: 40px;
height: 20px;

// Square indicator size (20x20px, half of button)
width: 20px;
height: 20px;

// Colors in updateIndicatorState function:
if (theme === 'dark') {
  // Night mode (right position)
  themeIndicator.style.backgroundColor = '#00ffff';  // Your color
  themeIndicator.style.transform = 'translateX(20px)';
} else {
  // Day mode (left position)
  themeIndicator.style.backgroundColor = '#ff8800';  // Your color
  themeIndicator.style.transform = 'translateX(0px)';
}
```

#### Popular Toggle Color Combinations:
- **Green/Red**: `#00ff00` / `#ff0000`
- **Blue/Yellow**: `#0080ff` / `#ffff00`
- **Purple/Orange**: `#ff00ff` / `#ff8800`
- **White/Black**: `#ffffff` / `#000000`

### 💰 Donation Button

Customize the Ko-Fi donation button in `src/components/ui/KofiButton.astro`:

```css
.kofi-floating-button {
  /* Button position */
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);

  /* Button colors */
  background-color: #ff5f5f;    /* Red background */
  border: 3px solid #ffffff;   /* White border */
}
```

### ✨ Particle Effects

Customize background particle colors in `BaseLayout.astro`:

```css
/* Particle color variable */
--particle-color: var(--pixel-cyan);

/* Or set specific color */
--particle-color: #00ff00;  /* Green particles */
```

## 📁 Important Files

### 🔧 Configuration Files
- `src/config/site.ts` - Main site configuration
- `src/config/types.ts` - TypeScript type definitions

### 🎨 Theme Files
- `src/components/layout/BaseLayout.astro` - Base theme CSS
- `src/styles/global.css` - Global styles

### 🧩 Component Files
- `src/components/ui/Header.astro` - Header & toggle button
- `src/components/ui/KofiButton.astro` - Donation button

### 📝 Content Files
- `src/content/articles/` - Blog articles
- `src/pages/` - Site pages

## 🎯 Best Practices

### High Contrast
Use high contrast colors for better readability

### Consistent Palette
Stick to 2-3 main colors for consistency

### Test Both Modes
Always test colors in both day and night modes

### Neon Effects
Bright, saturated colors work best for pixel themes

## 🛠️ Troubleshooting

### Colors not updating?
- Restart development server: `npm run dev`
- Clear browser cache (Ctrl+F5)
- Check for CSS syntax errors

### Toggle button not working?
- Check JavaScript console for errors
- Verify event listeners in Header.astro
- Ensure CSS variables are properly defined

### Best practice tips
- Always backup before making changes
- Test changes in both light and dark modes
- Use color pickers to find perfect hex codes

## 🎉 Ready to Customize

You now have all the knowledge to create your perfect pixel theme!

- **Demo**: [/demo](/demo)
- **Home**: [/](/)
- **Articles**: [/articles](/articles)