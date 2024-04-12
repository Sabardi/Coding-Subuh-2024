import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  resolve: {
    alias: {
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  build: {
    rollupOptions: {
        input: {
          index: resolve(__dirname, "src/index.html"),
          register: resolve(__dirname, "src/register.html"),
        },
      },
    //   bisa tidak ikut
    // outDir: '../dist'
    
  },
  server: {
    port: 8080
  }
}