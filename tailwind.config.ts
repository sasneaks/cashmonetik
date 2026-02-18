import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0f',
          elevated: '#111118',
          card: 'rgba(255, 255, 255, 0.04)',
          'card-hover': 'rgba(255, 255, 255, 0.08)',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.16)',
        },
        text: {
          DEFAULT: '#f5f5f7',
          secondary: 'rgba(255, 255, 255, 0.6)',
          tertiary: 'rgba(255, 255, 255, 0.35)',
        },
        primary: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
          glow: 'rgba(59, 130, 246, 0.12)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '20px',
        xl: '28px',
      },
      maxWidth: {
        container: '1200px',
      },
      transitionTimingFunction: {
        'ease-out-custom': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'particle-float': {
          '0%': { transform: 'translateY(100vh) translateX(0) scale(0)', opacity: '0' },
          '10%': { opacity: '1', transform: 'translateY(90vh) translateX(10px) scale(1)' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-10vh) translateX(-20px) scale(0.5)', opacity: '0' },
        },
        'float-product': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translateY(-30px) rotate(3deg) scale(1.05)' },
          '50%': { transform: 'translateY(-15px) rotate(-2deg) scale(0.98)' },
          '75%': { transform: 'translateY(-40px) rotate(2deg) scale(1.02)' },
        },
        'logo-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        'scroll-line': {
          '0%': { top: '-50%' },
          '100%': { top: '150%' },
        },
        'typed-blink': {
          '50%': { opacity: '0' },
        },
        'btn-glow-pulse': {
          '0%, 100%': { boxShadow: '0 2px 8px rgba(0,0,0,0.3)' },
          '50%': { boxShadow: '0 0 24px rgba(59, 130, 246, 0.3), 0 4px 16px rgba(0,0,0,0.3)' },
        },
        'chatbot-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(239, 68, 68, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(239, 68, 68, 0)' },
        },
        'product-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'orb-drift-a': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 15px) scale(0.95)' },
        },
        'orb-drift-b': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-25px, 20px) scale(0.95)' },
          '66%': { transform: 'translate(15px, -25px) scale(1.05)' },
        },
      },
      animation: {
        'particle-float': 'particle-float linear infinite',
        'float-product': 'float-product 20s ease-in-out infinite',
        'logo-scroll': 'logo-scroll 30s linear infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'scroll-line': 'scroll-line 2s ease-in-out infinite',
        'typed-blink': 'typed-blink 0.7s infinite',
        'btn-glow-pulse': 'btn-glow-pulse 3s ease-in-out infinite',
        'chatbot-pulse': 'chatbot-pulse 2s ease-in-out infinite',
        'product-float': 'product-float 4s ease-in-out infinite',
        'orb-drift-a': 'orb-drift-a 20s ease-in-out infinite',
        'orb-drift-b': 'orb-drift-b 25s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
