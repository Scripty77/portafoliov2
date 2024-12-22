import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://scripty77.github.io/portafoliov2",
  plugins: [react()],
})
