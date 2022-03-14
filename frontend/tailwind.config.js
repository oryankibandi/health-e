module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        homePage: "url('/assets/images/background.jpg')",
        loginPage: "url('/assets/images/background2.jpg')",
      },
      fontFamily: {
        Sansita: ['Sansita', 'serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
