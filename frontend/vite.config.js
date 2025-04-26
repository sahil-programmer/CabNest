// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // raise to 1 MB if needed
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'socket.io-client'],
          maps: ['leaflet', /* etc. */]
        }
      }
    }
  }
})
