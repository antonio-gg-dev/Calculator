/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.vue'
  ],
  theme: {
    colors: {
      base: {
        DEFAULT: '#f2f4f8',
        highlight: '#f7f8fa',
        alt: '#1a1a1a'
      },
      primary: {
        DEFAULT: '#e3e8f0',
        highlight: '#eef1f6',
        alt: '#1a1a1a'
      }
    },
    boxShadow: {
      button: '0.25rem 0.25rem 0.75rem #cecfd3, -0.25rem -0.25rem 0.75rem #ffffff',
      'inset-button': 'inset 0.25rem 0.25rem 0.75rem #cecfd3, inset -0.25rem -0.25rem 0.75rem #ffffff'
    }
  }
}
