export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface SiteConfig {
  // Basic information
  siteName: string;
  siteDescription: string;
  author: string;
  url: string;

  // Theme colors
  themeColors: {
    primary: string;    // Primary color (default green)
    secondary: string;  // Secondary color (default cyan)
    accent: string;     // Accent color (default yellow)
    background: string; // Background color
    text: string;       // Text color
  };

  // Social links
  socialLinks: SocialLink[];

  // Ko-Fi donation link
  kofiLink?: string;
}