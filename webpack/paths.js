const path = require('path');

const rootPath = path.resolve(__dirname, '..')
const srcPath = path.resolve(rootPath, 'src')

const BUILD = 'dist'

const build = {
  _: path.resolve(rootPath, BUILD),
}

const src = {
  _: srcPath,
  entry: path.join(srcPath,  'index.ts'),
}

module.exports = {
  _: rootPath,
  build,
  src,
}
