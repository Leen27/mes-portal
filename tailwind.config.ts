/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
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
          env: 'var(--color-gray-env)',
          blue: 'var(--color-gray-blue)'
        }
      },
      fontSize: {
        1: 'var(--font-size-1)',
        2: 'var(--font-size-2)',
        3: 'var(--font-size-3)',
        4: 'var(--font-size-4)',
        5: 'var(--font-size-5)',
        6: 'var(--font-size-6)',
        7: ['var(--font-size-7)', { fontWeight: 'bold' }],
        8: 'var(--font-size-8)'
      }
    }
    // colors: {}
  },
  plugins: []
} satisfies Config
