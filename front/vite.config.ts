import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint';

export default defineConfig({
<<<<<<< HEAD
  plugins: [vue()],
  server: {
    port: 8001,
    host: true
  }
})
=======
  plugins: [vue(), eslint()],
})
>>>>>>> front
