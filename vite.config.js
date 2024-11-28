import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  env:{
    node:true
  },
  server:{
    host:true,
    port:9000
  },
  entry: "./src/main.js",
  plugins: [vue()],

})
