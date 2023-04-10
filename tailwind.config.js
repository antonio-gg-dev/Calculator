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
        alt: {
          DEFAULT: '#1a1a1a',
          highlight: '#1a1a1a'
        }
      },
      primary: {
        DEFAULT: '#e3e8f0',
        highlight: '#eef1f6',
        alt: {
          DEFAULT: '#1a1a1a',
          highlight: '#1a1a1a'
        }
      },
      danger: {
        DEFAULT: '#f5e5de',
        highlight: '#f9efeb',
        alt: {
          DEFAULT: '#1a1a1a',
          highlight: '#1a1a1a'
        }
      }
    },
    boxShadow: {
      out: '0.25rem 0.25rem 0.75rem #0000002f, -0.25rem -0.25rem 0.75rem #ffffff, inset 0 0 0 transparent, inset 0 0 0 transparent',
      in: '0 0 0 transparent, 0 0 0 transparent, inset 0.25rem 0.25rem 0.75rem #0000002f, inset -0.25rem -0.25rem 0.75rem #ffffff'
    }
  }
}
