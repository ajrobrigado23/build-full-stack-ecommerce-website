/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': 'Inter var, ui-sans-serif, system-ui',
      'serif': 'Inter var, ui-sans-serif, system-ui',
    },
    daisyui: {
      themes: [
        {
          "fantasy": {
            "primary": "#0000ff",
            "secondary": "#f6f6f6",
          },
        },
      ],
    },

    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
}

