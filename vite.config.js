import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.glb'], // Ensure .glb files are treated as assets
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]', // Ensure consistent asset naming
      },
    },
  },
});
