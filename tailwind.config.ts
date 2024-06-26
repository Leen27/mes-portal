/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)"',
        secondary: 'var(--color-secondary)',
        error: 'var(--color-error)',
        color: {
          1: 'var(--color-portal-1)',
          2: 'var(--color-portal-2)',
          3: 'var(--color-portal-3)',
          4: 'var(--color-portal-4)'
        },
        gray: {
          1: 'var(--color-gray-1)',
          2: 'var(--color-gray-2)',
          3: 'var(--color-gray-3)',
          4: 'var(--color-gray-4)',
          5: 'var(--color-gray-5)',
          6: 'var(--color-gray-6)',
          7: 'var(--color-gray-7)',
          8: 'var(--color-gray-8)',
          9: 'var(--color-gray-9)',
          blue: 'var(--color-gray-blue)'
        }
      },
      fontSize: {
        title: '22px',
        placehodler: '16px'
      }
    }
    // colors: {}
  },
  plugins: []
}
