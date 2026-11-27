import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // относительные пути, чтобы сайт работал на GitHub Pages в подпапке репозитория
});
