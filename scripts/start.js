// const { concurrent, } = require('nps-utils') // rimraf, setColors,

module.exports = {
  default: 'nps start.dev',
  prod: 'node dist/index.js',
  dev: 'ts-node src/index.ts'
}
