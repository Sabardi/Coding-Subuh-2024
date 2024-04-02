import { resolve } from 'path'

// import (resolve) = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  server: {
    port: 8080,
    hot: true
  }
}