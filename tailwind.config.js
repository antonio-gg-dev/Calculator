/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/modules/ThemeSwitcher.ts',
    './stories/**/*.stories.ts',
    './src/**/*.vue'
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '32rem'
      }
    }
  },
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: {
        extend: {
          colors: {
            background: '#f2f4f8',
            calculator: '#f2f4f800',
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
            in: '0 0 0 transparent, 0 0 0 transparent, inset 0.25rem 0.25rem 0.75rem #0000002f, inset -0.25rem -0.25rem 0.75rem #ffffff',
            display: 'none',
            calculator: 'none'
          }
        }
      },
      themes: [{
        name: 'dark',
        extend: {
          colors: {
            background: '#20242d',
            calculator: '#20242d00',
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
            in: '0 0 0 transparent, 0 0 0 transparent, inset 0.25rem 0.25rem 0.75rem #000000, inset -0.25rem -0.25rem 0.75rem #ffffff2f',
            display: 'none',
            calculator: 'none'
          }
        }
      }, {
        name: 'nata',
        extend: {
          colors: {
            background: '#f2f2f2',
            calculator: '#262626',
            display: {
              DEFAULT: '#bfbfbf',
              alt: '#000000'
            },
            base: {
              DEFAULT: '#ffffff',
              highlight: '#f2f2f2',
              alt: {
                DEFAULT: '#000000',
                highlight: '#000000'
              }
            },
            primary: {
              DEFAULT: '#0070e6',
              highlight: '#1a89ff',
              alt: {
                DEFAULT: '#ffffff',
                highlight: '#ffffff'
              }
            },
            danger: {
              DEFAULT: '#d12215',
              highlight: '#ea3c2e',
              alt: {
                DEFAULT: '#ffffff',
                highlight: '#ffffff'
              }
            }
          },
          boxShadow: {
            out: 'inset 0 0.25rem 0.75rem #ffffff7f, inset 0 -0.25rem 0.75rem #0000007f',
            in: 'inset 0 0.25rem 0.5rem #ffffff7f, inset 0 -0.25rem 0.5rem #0000007f',
            display: 'inset 0 0.25rem 0.75rem #0000007f, inset 0 -0.25rem 0.75rem #ffffff7f',
            calculator: '0 0.25rem 0.125rem #00000055, 0 0.25rem 1.25rem #00000055'
          }
        }
      }]
    })
  ]
}
