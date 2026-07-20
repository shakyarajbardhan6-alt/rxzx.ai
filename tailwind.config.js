/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1B2340',       // deep indigo — headers, primary text
        paper: '#EEF2F5',     // cool notebook-page background
        card: '#FFFFFF',
        margin: '#C3CEDC',    // ruled-line grey
        highlight: '#FFD23F', // highlighter-yellow accent
        tab10: '#3E7CB1',
        tab11: '#59A96A',
        tab12: '#C1666B',
      },
      fontFamily: {
        display: ['Lora', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
