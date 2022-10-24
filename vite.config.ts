import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      //define global scss variable
      scss: {
        additionalData: `@theme/global.scss`
      }
    }
  }
})
