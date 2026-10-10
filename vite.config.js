import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
export default defineConfig({
  plugins: [react()],
  base: './',
  test: {
    environment: 'jsdom', globals: true, setupFiles: ['./test/setup.js'],
    // Los procesos forks no responden en este host Windows; threads ejecuta los mismos tests.
    pool: 'threads', maxWorkers: 1,
  },
})
