import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/armenian_School/',
  build: {
    outDir: 'docs',
  },
})