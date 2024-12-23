import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

const apiUrl = process.env.VITE_API_URL || "https://localhost:7146/"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, 
    port: 4173,
  },
  define: {
    API_URL: JSON.stringify(apiUrl),
  },
})
