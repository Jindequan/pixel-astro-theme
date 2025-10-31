import { getSiteConfig } from '../config/site';
import { ThemeManager } from '../config/theme';

// Initialize theme settings
export function initializeTheme() {
  if (typeof document === 'undefined') return;

  const config = getSiteConfig();
  const themeManager = ThemeManager.getInstance(config);

  // Apply theme colors
  themeManager.initializeTheme();

  // Listen for theme change events
  document.addEventListener('toggleTheme', () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Adjust color brightness based on theme
    const colors = themeManager.getCurrentThemeColors();
    if (newTheme === 'light') {
      // In light theme, make colors softer
      const adjustedColors = {
        primary: adjustColorBrightness(colors.primary, 20),
        secondary: adjustColorBrightness(colors.secondary, 20),
        accent: adjustColorBrightness(colors.accent, 20),
        background: '#f8f9fa',
        text: adjustColorBrightness(colors.text, -30)
      };
      themeManager.applyThemeColors(adjustedColors);
    } else {
      // Restore original colors
      themeManager.applyThemeColors(config.themeColors);
    }
  });

  // Listen for font size changes
  document.addEventListener('fontSizeChange', (e: any) => {
    const { size } = e.detail;
    document.documentElement.style.setProperty('--font-size-base', `${size}px`);
    localStorage.setItem('fontSize', size.toString());
  });

  // Restore saved settings
  restoreSavedSettings();
}

// Restore saved settings
function restoreSavedSettings() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const savedFontSize = localStorage.getItem('fontSize') || '16';

  document.documentElement.setAttribute('data-theme', savedTheme);
  document.documentElement.style.setProperty('--font-size-base', `${savedFontSize}px`);
}

// Adjust color brightness
function adjustColorBrightness(color: string, percent: number): string {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;

  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255))
    .toString(16).slice(1);
}

// Dynamically inject theme CSS
export function injectThemeCSS(colors: any) {
  if (typeof document === 'undefined') return;

  const themeCSS = `
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
      --card-bg: ${colors.background}e6;
    }

    /* Dynamically generated color variables */
    .pixel-text-primary { color: var(--theme-primary); }
    .pixel-text-secondary { color: var(--theme-secondary); }
    .pixel-text-accent { color: var(--theme-accent); }
    .pixel-bg-primary { background-color: var(--theme-primary); }
    .pixel-bg-secondary { background-color: var(--theme-secondary); }
    .pixel-bg-accent { background-color: var(--theme-accent); }
    .pixel-border-primary { border-color: var(--theme-primary); }
    .pixel-border-secondary { border-color: var(--theme-secondary); }
    .pixel-border-accent { border-color: var(--theme-accent); }
  `;

  // Check if theme style tag already exists
  let themeStyleTag = document.getElementById('dynamic-theme-css');
  if (!themeStyleTag) {
    themeStyleTag = document.createElement('style');
    themeStyleTag.id = 'dynamic-theme-css';
    document.head.appendChild(themeStyleTag);
  }

  themeStyleTag.textContent = themeCSS;
}

// Theme switching functionality
export function toggleTheme() {
  document.dispatchEvent(new CustomEvent('toggleTheme'));
}

// Font size adjustment functionality
export function setFontSize(size: number) {
  document.dispatchEvent(new CustomEvent('fontSizeChange', {
    detail: { size }
  }));
}