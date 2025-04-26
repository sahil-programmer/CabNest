// vite.config.js
import { defineConfig } from 'vite'
export default defineConfig({
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
