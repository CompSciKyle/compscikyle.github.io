import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Serve files from the root
  assetsInclude: ['**/*.glb'], // Handle .glb files
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]', // Organize assets in the /assets folder
      },
    },
  },
});
