import { defineConfig } from 'vite'

export default defineConfig({
  base: '/front-end-entrance-exam/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  publicDir: 'public',
})