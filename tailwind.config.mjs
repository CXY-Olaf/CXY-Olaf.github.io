/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary accent — low-saturation indigo
        accent: {
          50: '#f0f4fe',
          100: '#dce4fc',
          200: '#bcccfc',
          300: '#8aa7fa',
          400: '#5a7ef7',
          500: '#3b5cf2',
          600: '#2740e8',
          700: '#1f30d5',
          800: '#1f2aad',
          900: '#1d2889',
          950: '#151a53',
        },
        // Warm neutral for subtle differentiation
        warm: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#ebe0cc',
          300: '#dcc7a8',
          400: '#cba87f',
          500: '#bf8f60',
          600: '#b27b55',
          700: '#946548',
          800: '#79533f',
          900: '#634536',
          950: '#35221b',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'Noto Sans SC',
          'PingFang SC',
          'Microsoft YaHei',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Cascadia Code',
          'Consolas',
          'Monaco',
          'Courier New',
          'monospace',
        ],
      },
      // Unified radius system
      borderRadius: {
        sm: '6px',
        DEFAULT: '10px',
        md: '10px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
      },
      // Refined shadow system
      boxShadow: {
        subtle: '0 1px 2px 0 rgb(0 0 0 / 0.04)',
        card: '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
        'card-hover':
          '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        elevated:
          '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04)',
        'dark-card': '0 1px 3px 0 rgb(0 0 0 / 0.3)',
        'dark-card-hover':
          '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'slide-up': 'slideUp 0.6s ease-out both',
        'slide-down': 'slideDown 0.3s ease-out both',
        'scale-in': 'scaleIn 0.3s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
