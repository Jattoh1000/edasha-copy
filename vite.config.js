import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        // secure: false,
        // Add this line to ensure cookies are sent
        // cookieDomainRewrite: 'localhost'
      }
    }
  }
})
