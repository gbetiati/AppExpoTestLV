/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './App.{js,jsx,ts,tsx}',
      './screens/**/*.{js,jsx,ts,tsx}',
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
      './src/**/*.{js,jsx,ts,tsx}',
      './app.{js,jsx,ts,tsx}',
      './app/*.{js,jsx,ts,tsx}',
      './App.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0094ff',
        secondary: '#0065d6',
        accent: '#00d7ff',
        neutral: '#242424',
        'base-100': '#eeffff',
        info: '#3dceff',
        success: '#34c759',
        warning: '#ff9500',
        error: '#ff3b30',
      },
    },
  },
  plugins: [],
};