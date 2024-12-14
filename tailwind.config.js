/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Подключаем все файлы в src
  ],
  theme: {
    extend: {}, // Добавь сюда свои кастомные стили, если нужно
  },
  plugins: [], // Можешь добавить Tailwind-плагины здесь
};
