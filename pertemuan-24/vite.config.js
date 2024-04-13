import { resolve } from 'path';
import { glob } from "glob"; 


// npm install glob sebelum di import

export default {
  root: resolve(__dirname, 'src'),
  resolve: {
    alias: {
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  build: {
    rollupOptions: {
        input: glob.sync(resolve(__dirname, "src","*.html")),
      },
    outDir: '../dist'
    
  },
  server: {
    port: 8080
  }
}