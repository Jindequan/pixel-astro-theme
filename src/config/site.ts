import type { SiteConfig } from './types';

export const defaultSiteConfig: SiteConfig = {
  // Basic information
  siteName: 'PIXEL ASTRO',
  siteDescription: 'A retro pixel-themed Astro blog with particle effects',
  author: 'Liu Zan',
  url: 'https://pixel-astro-theme.whataicando.site',

  // Theme colors - default neon green theme
  themeColors: {
    primary: '#00ff00',      // Neon green (primary color)
    secondary: '#00ffff',    // Neon cyan (secondary color)
    accent: '#ff8800',       // Deep orange (accent color) - better visibility in day mode
    background: '#0a0a0a',   // Dark background
    text: '#00ff00'          // Text color (same as primary by default)
  },

  // Social media links
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/Jindequan',
      icon: 'github'
    },
    {
      name: 'X',
      url: 'https://x.com/Liu__Zan/',
      icon: 'x'
    },
    {
      name: 'Bilibili',
      url: 'https://space.bilibili.com/6537212',
      icon: 'bilibili'
    },
    {
      name: 'Email',
      url: 'mailto:jindeq52@gmail.com',
      icon: 'email'
    }
  ],

  // Ko-Fi donation link for floating button
  kofiLink: 'https://ko-fi.com/F1F41NO3SK'
};

// Get current configuration
export function getSiteConfig(): SiteConfig {
  return { ...defaultSiteConfig };
}