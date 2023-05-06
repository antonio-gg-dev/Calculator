/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.vue'
  ],
  theme: {
    extend: {
      maxWidth: {
        calculator: '32rem'
      }
    }
  },
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: {
        extend: {
          colors: {
            background: '#f2f4f8',
            display: {
              DEFAULT: '#f2f4f800',
              alt: '#1a1a1a'
            },
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
      },
      themes: [{
        name: 'dark',
        extend: {
          colors: {
            background: '#20242d',
            display: {
              DEFAULT: '#20242d00',
              alt: '#ffffff'
            },
            base: {
              DEFAULT: '#21252b',
              highlight: '#383e48',
              alt: {
                DEFAULT: '#ffffff',
                highlight: '#ffffff'
              }
            },
            primary: {
              DEFAULT: '#20242d',
              highlight: '#353c4b',
              alt: {
                DEFAULT: '#b2b2b2',
                highlight: '#b2b2b2'
              }
            },
            danger: {
              DEFAULT: '#20242d',
              highlight: '#353c4b',
              alt: {
                DEFAULT: '#ffb6c1',
                highlight: '#ffb6c1'
              }
            }
          },
          boxShadow: {
            out: '0.25rem 0.25rem 0.75rem #000000, -0.25rem -0.25rem 0.75rem #ffffff2f, inset 0 0 0 transparent, inset 0 0 0 transparent',
            in: '0 0 0 transparent, 0 0 0 transparent, inset 0.25rem 0.25rem 0.75rem #000000, inset -0.25rem -0.25rem 0.75rem #ffffff2f'
          }
        }
      }]
    })
  ]
}
