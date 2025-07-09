/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           // All HTML files in root
    "./**/*.html",        // All HTML files in subfolders
    "./*.js",             // Any vanilla JS files
    "./**/*.js"           // JS in subfolders too
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#fff7ed',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          900: '#9a3412'
        }
      }
    },
  },
  plugins: [],
};
