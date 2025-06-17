/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#151515',
        secondary: '#202020',
        accent: '#c49f3b',
        text: '#ffffff',
        'text-muted': '#d9d9d9'
      },
      fontFamily: {
        'fira': ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}