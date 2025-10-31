# 🎨 Theme Customization Guide

## Overview

Pixel Astro Theme features a sophisticated theme system with automatic contrast detection, preset themes, and full customization support.

## Color System

### Smart Contrast Detection

The theme automatically calculates text color contrast based on background colors:

```javascript
// Automatic contrast calculation
function getContrastColor(backgroundColor) {
  // Converts hex to RGB and calculates luminance
  // Returns black for light backgrounds, white for dark
}
```

### Theme Structure

```typescript
interface ThemeColors {
  primary: string;     // Main accent color
  secondary: string;   // Secondary accent
  accent: string;      // Highlight color (optimized for visibility)
  background: string;  // Page background
  text: string;        // Primary text color
}
```

## Preset Themes

### 1. Neon (Default)
```typescript
{
  primary: '#00ff00',    // Classic terminal green
  secondary: '#00ffff',  // Cyan
  accent: '#ff8800',     // Orange (visibility optimized)
  background: '#0a0a0a', // Near black
  text: '#00ff00'        // Terminal green
}
```

### 2. Sunset
```typescript
{
  primary: '#ff6b35',    // Warm orange
  secondary: '#f7931e',  // Gold
  accent: '#ffcd3c',     // Yellow
  background: '#2d1b1b', // Dark brown
  text: '#ff8c42'        // Light orange
}
```

### 3. Ocean
```typescript
{
  primary: '#0077be',    // Ocean blue
  secondary: '#00a8cc',  // Light blue
  accent: '#74c0fc',     // Sky blue
  background: '#0f172a', // Deep navy
  text: '#38bdf8'        // Bright blue
}
```

### 4. Forest
```typescript
{
  primary: '#22c55e',    // Forest green
  secondary: '#16a34a',  // Dark green
  accent: '#84cc16',     // Lime green
  background: '#14532d', // Dark forest
  text: '#4ade80'        // Light green
}
```

### 5. Purple
```typescript
{
  primary: '#9333ea',    // Royal purple
  secondary: '#a855f7',  // Light purple
  accent: '#c084fc',     // Lavender
  background: '#2e1065', // Deep purple
  text: '#a78bfa'        // Light purple
}
```

### 6. Cyberpunk
```typescript
{
  primary: '#ff00ff',    // Magenta
  secondary: '#00ffff',  // Cyan
  accent: '#ffff00',     // Yellow
  background: '#1a0033', // Dark purple
  text: '#ff00ff'        // Bright magenta
}
```

## Custom Theme Creation

### Basic Customization

Edit `src/config/site.ts`:

```typescript
export const defaultSiteConfig = {
  themeColors: {
    primary: '#your-color',     // Main accent
    secondary: '#your-color',   // Secondary accent
    accent: '#your-color',      // Highlight
    background: '#your-color',  // Background
    text: '#your-color'         // Text color
  }
};
```

### Advanced Customization

For more control, modify `src/config/theme.ts`:

```typescript
export const generateThemeCSSString = (colors: ThemeColors): string => {
  return `
    :root {
      --pixel-cyan: ${colors.primary};
      --pixel-magenta: ${colors.secondary};
      --pixel-yellow: ${colors.accent};
      --pixel-green: ${colors.text};

      /* Day mode optimizations */
      --pixel-yellow: #ff8c00;    /* Better visibility */
      --pixel-cyan: #008b8b;      /* Darker cyan */
    }

    [data-theme="dark"] {
      --pixel-yellow: #ffaa00;    /* Brighter for dark mode */
      --pixel-cyan: #00ffff;      /* Bright cyan */
    }
  `;
};
```

## Day/Night Mode

### Automatic Theme Adaptation

The theme automatically adjusts colors for day and night modes:

- **Day Mode**: Uses softer, more visible colors
- **Night Mode**: Uses brighter, more vibrant colors
- **Smart Contrast**: Maintains readability in both modes

### Custom Day/Night Colors

```css
/* In your custom CSS */
:root {
  --pixel-yellow: #ff8c00;  /* Dark orange for day mode */
}

[data-theme="dark"] {
  --pixel-yellow: #ffaa00;  /* Bright orange for night mode */
}
```

## Component-Specific Theming

### Article Colors

Each article can have its own theme color:

```markdown
---
title: "My Article"
color: "#ff6b35"  # Custom color for this article
---
```

### Pixel Controls

UI controls use pixel-perfect styling:

```css
.pixel-button {
  background: var(--card-bg);
  border: 2px solid var(--border-primary);
  image-rendering: pixelated;
}

.theme-toggle-button {
  width: 44px;
  height: 44px;
  /* Pixel-perfect dimensions */
}
```

## Typography

### Pixel Fonts

The theme uses two main pixel fonts:

- **Doto**: Modern pixel font (primary)
- **Sixtyfour**: Retro gaming font (accent)

### Font Customization

```css
/* Custom font weights */
.heading {
  font-family: 'Doto', 'Sixtyfour', monospace;
  font-weight: 700;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.5);
}

.pixel-title {
  font-weight: 900;
  letter-spacing: 0.1em;
}
```

## Animation Effects

### Particle System

Particles adapt to theme colors:

```javascript
class ParticleBackground {
  getParticleColor() {
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--particle-color');
  }
}
```

### Hover Effects

Pixel-perfect hover animations:

```css
.pixel-card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 20px var(--accent-color);
}
```

## Best Practices

### Color Selection

1. **High Contrast**: Ensure text remains readable
2. **Day Mode Friendly**: Avoid very light colors
3. **Consistent Palette**: Use harmonious color combinations
4. **Accessibility**: Test with color blindness simulators

### Performance

1. **CSS Variables**: Use for dynamic theming
2. **Minimal Repaints**: Batch color changes
3. **Transitions**: Keep animations smooth
4. **Image Optimization**: Use pixel-perfect images

### Testing

1. **Cross-browser**: Test in all supported browsers
2. **Responsive**: Check on mobile devices
3. **Theme Switching**: Verify smooth transitions
4. **Accessibility**: Use contrast checkers

## Troubleshooting

### Common Issues

**Colors not updating:**
- Clear browser cache
- Check CSS variable names
- Verify JavaScript is running

**Poor contrast:**
- Use the automatic contrast detection
- Test with different color combinations
- Check day/night mode differences

**Pixel blurring:**
- Ensure `image-rendering: pixelated`
- Check font loading
- Verify CSS transforms

### Debug Tools

```javascript
// Log current theme colors
console.log(getComputedStyle(document.documentElement)
  .getPropertyValue('--pixel-cyan'));

// Check current theme
console.log(document.documentElement.getAttribute('data-theme'));
```

Create stunning pixel themes that maintain perfect readability and retro aesthetics! 🎮