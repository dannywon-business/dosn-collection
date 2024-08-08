/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './common/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      'tiny': '.625rem', // 16 * 0.625 = 10px
      xs: ['0.75rem'],
      sm: ['0.875rem'],
      base: ['1rem'],
      lg: ['1.125rem'],
      xl: ['1.25rem'],
      '2xl': ['1.5rem'],
      '3xl': ['1.875rem'],
      '4xl': ['2.25rem'],
      '5xl': ['3rem'],
      '6xl': ['3.75rem'],
      '7xl': ['4.5rem'],
      '8xl': ['6rem'],
      '9xl': ['8rem'],
    },
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-6px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in': {
          '0%': {
            opacity: 0,

          },
          '100%': {
            opacity: 100,
          },
        },
        'fade-out': {
          '0%': {
            opacity: 100,

          },
          '100%': {
            opacity: 0,
          },
        },
        sliderLeft: {
          '0%': {
            transform: 'translateX(0px)'
          },
          '100%': {
            transform: 'translateX(-1857px)'
          }
        },
        sliderRight: {
          '0%': {
            transform: 'translateX(-1787px)'
          },
          '100%': {
            transform: 'translateX(0px)'
          }
        },
        'slideIn-to-left': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slideIn-to-right': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-in',
        'fade-out': 'fade-out 0.5s ease-out',
        'fade-in-fast': 'fade-in 0.15s ease-in',
        'fade-in-slow': 'fade-in 1s ease-in',
        sliderLeft: 'sliderLeft 10s linear infinite',
        sliderRight: 'sliderRight 10s linear infinite',
        'slideIn-to-left': 'slideIn-to-left 0.2s ease-in-out',
        'slideIn-to-right': 'slideIn-to-right 0.2s ease-in-out',
      },
      colors: {
        /* 20230728 MGT 키컬러 세팅 -by.danny */
        // Base
        'S_BLACK': '#282828',

        // Primary_blue
        'P50': '#eff2fe',
        'P75': '#bdcaf9',
        'P100': '#bdcaf9',
        'P200': '#7993f3',
        'P300': '#5d7df0',
        'P400': '#4158a8',
        'P500': '#394c92',

        // Secondary
        'S50': '#f6fffd',
        'S75': '#d9fff7',
        'S100': '#cafff4',
        'S200': '#b3ffef',
        'S300': '#a3ffec',
        'S400': '#72b3a5',
        'S500': '#399985',

        // Orange
        'O50': '#faf2ee',
        'O75': '#eac9b7',
        'O100': '#e1b39a',
        'O200': '#d4926e',
        'O300': '#cb7c50',
        'O400': '#8e5738',
        'O500': '#7c4c31',

        // Backgorund
        'B100': '#757f93',
        'B200': '#293245',
        'B300': '#181f2e',
        'B400': '#0e1521',
        'B500': '#090d14',
        'BG': '#06080d',

        // Warning
        'W50': '#fcebeb',
        'W75': '#f3acac',
        'W100': '#ee8a8a',
        'W200': '#e65757',
        'W300': '#e13535',
        'W400': '#9e2525',
        'W500': '#892020',

        // Success
        'Su50': '#ecf8ee',
        'Su75': '#b2e1b9',
        'Su100': '#92d59c',
        'Su200': '#63c272',
        'Su300': '#43b655',
        'Su400': '#2f7f3b',
        'Su500': '#296f34',

        // Border
        'BD': '#e4eaff1a',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

