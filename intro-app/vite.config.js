import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/mount.jsx'),
      name: 'DBIntro',
      formats: ['iife'],
      fileName: () => 'intro.bundle.js'
    },
    outDir: resolve(__dirname, '../js/intro'),
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        assetFileNames: (info) => info.name && info.name.endsWith('.css') ? 'intro.bundle.css' : 'assets/[name][extname]'
      }
    }
  }
})
