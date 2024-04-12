import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  resolve: {
    alias: {
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}