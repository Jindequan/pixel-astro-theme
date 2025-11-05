import type { SiteConfig } from './types';

export class ThemeManager {
  private static instance: ThemeManager;
  private config: SiteConfig;

  private constructor(config: SiteConfig) {
    this.config = config;
  }

  static getInstance(config?: SiteConfig): ThemeManager {
    if (!ThemeManager.instance && config) {
      ThemeManager.instance = new ThemeManager(config);
    }
    return ThemeManager.instance;
  }

  // Apply theme colors to CSS variables
  applyThemeColors(colors: SiteConfig['themeColors']) {
    const root = document.documentElement;

    root.style.setProperty('--theme-primary', colors.primary);
    root.style.setProperty('--theme-secondary', colors.secondary);
    root.style.setProperty('--theme-accent', colors.accent);
    root.style.setProperty('--theme-background', colors.background);
    root.style.setProperty('--theme-text', colors.text);

    // Update old pixel color variables for compatibility
    root.style.setProperty('--pixel-green', colors.primary);
    root.style.setProperty('--pixel-cyan', colors.secondary);
    root.style.setProperty('--pixel-yellow', colors.accent);
    root.style.setProperty('--bg-color', colors.background);
    root.style.setProperty('--text-primary', colors.text);
  }

  // Get current theme colors
  getCurrentThemeColors(): SiteConfig['themeColors'] {
    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);

    return {
      primary: computedStyle.getPropertyValue('--theme-primary').trim() || '#00ff00',
      secondary: computedStyle.getPropertyValue('--theme-secondary').trim() || '#00ffff',
      accent: computedStyle.getPropertyValue('--theme-accent').trim() || '#ff8800',
      background: computedStyle.getPropertyValue('--theme-background').trim() || '#0a0a0a',
      text: computedStyle.getPropertyValue('--theme-text').trim() || '#00ff00'
    };
  }

  // Initialize theme
  initializeTheme() {
    if (typeof document !== 'undefined') {
      this.applyThemeColors(this.config.themeColors);
    }
  }

  // Create theme CSS class
  generateThemeCSS(colors: SiteConfig['themeColors']): string {
    return `
      :root {
        --theme-primary: ${colors.primary};
        --theme-secondary: ${colors.secondary};
        --theme-accent: ${colors.accent};
        --theme-background: ${colors.background};
        --theme-text: ${colors.text};

        /* Compatibility variables */
        --pixel-green: ${colors.primary};
        --pixel-cyan: ${colors.secondary};
        --pixel-yellow: ${colors.accent};
        --bg-color: ${colors.background};
        --text-primary: ${colors.text};
        --card-bg: ${colors.background}e6; /* Add transparency */
      }
    `;
  }

  // Get predefined themes
  static getPredefinedThemes() {
    return {
      neon: {
        primary: '#00ff00',
        secondary: '#00ffff',
        accent: '#ff8800',
        background: '#0a0a0a',
        text: '#00ff00'
      },
      sunset: {
        primary: '#ff6b35',
        secondary: '#f7931e',
        accent: '#ffcd3c',
        background: '#1a0f0a',
        text: '#ff6b35'
      },
      ocean: {
        primary: '#0077be',
        secondary: '#00a8cc',
        accent: '#00d4aa',
        background: '#0a1a1f',
        text: '#00a8cc'
      },
      forest: {
        primary: '#228b22',
        secondary: '#32cd32',
        accent: '#90ee90',
        background: '#0a1a0a',
        text: '#32cd32'
      },
      purple: {
        primary: '#9b59b6',
        secondary: '#8e44ad',
        accent: '#e74c3c',
        background: '#1a0a1a',
        text: '#9b59b6'
      },
      cyberpunk: {
        primary: '#ff00ff',
        secondary: '#00ffff',
        accent: '#ff8800',
        background: '#0a0a0a',
        text: '#ff00ff'
      }
    };
  }

  // Apply predefined theme
  applyPredefinedTheme(themeName: keyof ReturnType<typeof ThemeManager.getPredefinedThemes>) {
    const themes = ThemeManager.getPredefinedThemes();
    if (themes[themeName]) {
      this.applyThemeColors(themes[themeName]);
    }
  }
}

// Utility function to generate theme CSS string
export function generateThemeCSSString(colors: SiteConfig['themeColors']): string {
  return `
    /* Compatibility variables - maintain pixel color system */
    :root {
      --pixel-green: ${colors.primary};
      --pixel-cyan: ${colors.secondary};
      --pixel-yellow: ${colors.accent};
      --bg-color: ${colors.background};
      --card-bg: ${colors.background}e6;
    }
  `;
}