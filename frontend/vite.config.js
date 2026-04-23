
// https://vite.dev/config/
// gwtc-club-site/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/gwtc-club-site/' : '/',

  //add this
  server:{
    host:"0.0.0.0",
    port: 5173,
    strictPort: true,
    cors: true
  }
}))
  
