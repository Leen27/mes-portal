/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4747FF',
        secondary: '#01C59D',
        error: '#E22E28',
        color: {
          1: '#4747FF',
          2: '#01C59D',
          3: '#4747FF',
          4: '#01C59D'
        },
        gray: {
          1: '#F8F9FA',
          2: '#E9ECEF',
          3: '#DEE2E6',
          4: '#CED4DA',
          5: 'ADB5BD',
          6: '#6C757D',
          7: '#495057',
          8: '#343A40',
          9: '#212529',
          blue: '#344767'
        }
      }
    }
    // colors: {}
  },
  plugins: []
}
