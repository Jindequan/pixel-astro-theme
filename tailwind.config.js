/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['Courier New', 'monospace'],
        'particle': ['system-ui', 'sans-serif']
      },
      colors: {
        'pixel': {
          'black': '#000000',
          'white': '#FFFFFF',
          'gray': '#808080',
          'red': '#FF0000',
          'green': '#00FF00',
          'blue': '#0000FF',
          'yellow': '#FFFF00',
          'cyan': '#00FFFF',
          'magenta': '#FF00FF'
        }
      },
      animation: {
        'particle-float': 'particleFloat 3s ease-in-out infinite',
        'particle-disperse': 'particleDisperse 2s ease-out forwards',
        'pixel-glow': 'pixelGlow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        particleDisperse: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
            opacity: '1'
          },
          '100%': {
            transform: 'translate(var(--tx), var(--ty)) scale(0)',
            opacity: '0'
          }
        },
        pixelGlow: {
          '0%': {
            filter: 'drop-shadow(0 0 2px currentColor)',
            transform: 'scale(1)'
          },
          '100%': {
            filter: 'drop-shadow(0 0 8px currentColor) drop-shadow(0 0 16px currentColor)',
            transform: 'scale(1.05)'
          }
        }
      }
    },
  },
  plugins: [],
}