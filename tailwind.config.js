/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'qp-green': '#00C82E',
        'qp-green-dark': '#00A025',
        'qp-green-light': '#00E834',
        'qp-dark': '#0B1220',
        'qp-dark-2': '#0F1A2E',
        'qp-dark-3': '#162035',
        'qp-gray': '#6B7280',
        'qp-gray-light': '#9CA3AF',
        'qp-white': '#FFFFFF',
        'qp-surface': '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00C82E, 0 0 10px #00C82E' },
          '100%': { boxShadow: '0 0 20px #00C82E, 0 0 40px #00C82E, 0 0 60px #00C82E' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-mesh': 'radial-gradient(ellipse at 20% 50%, rgba(0,200,46,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0,200,46,0.10) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(0,200,46,0.08) 0%, transparent 50%)',
      },
      boxShadow: {
        'green': '0 0 20px rgba(0, 200, 46, 0.3)',
        'green-lg': '0 0 40px rgba(0, 200, 46, 0.4)',
        'green-xl': '0 0 60px rgba(0, 200, 46, 0.5)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 40px rgba(0, 200, 46, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
