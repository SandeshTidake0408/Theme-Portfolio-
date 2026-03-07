import { defineConfig } from 'vite';

export default defineConfig({
  // Base public path when served in development or production.
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser', // Recommended for production
  },
  server: {
    port: 5500,
    open: true,
  },
});
