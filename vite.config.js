import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Correct base path for deployment
  build: {
    rollupOptions: {
      input: './index.html', // Ensure this points to your entry file
    },
  },
});
