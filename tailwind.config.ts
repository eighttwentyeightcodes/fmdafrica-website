import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e3e9fa',
          100: '#c4d3f4',
          200: '#8da7e8',
          300: '#577bdb',
          400: '#2250cf',
          500: '#0038b8',
          600: '#002d93',
          700: '#00226e',
          800: '#00174a',
          900: '#000d25',
        },
        accent: {
          50: '#e3e9fa',
          100: '#c4d3f4',
          200: '#8da7e8',
          300: '#577bdb',
          400: '#2250cf',
          500: '#0038b8',
          600: '#002d93',
          700: '#00226e',
          800: '#00174a',
          900: '#000d25',
        },
        cyan: {
          50: '#f0fcfe',
          100: '#e0f9fd',
          200: '#c6eff5',
          300: '#a8e5ed',
          400: '#7dd6e3',
          500: '#4fc3d4',
          600: '#2da8ba',
          700: '#1e8693',
          800: '#156571',
          900: '#0d4550',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
