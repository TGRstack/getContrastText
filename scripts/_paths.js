const path = require('path');

const rootPath = path.resolve(__dirname, '..')
const SERVER = ''

const watchPaths = (() => {
  const P = 'src/'
  const W = 'webpack/'
  // chokidar doesn't run unless that level of the heirarchy is called...
  const X = '**/'

  const commonPaths = [
    '.env',
    '.env.development',
    // NOTE: this file and other shared
    'scripts/_*.js',
    'tslint.json',
    'tsconfig.json',
    'package.json',
    P+'*.ts',
    P+X+'*.ts',
    P+X+X+'*.ts',
    P+X+X+X+'*.ts',
    P+X+X+X+X+'*.ts',
    P+X+X+X+X+X+'*.ts',
    P+'types/*',
    P+'types/'+X+'*',
    P+'types/'+X+X+'*',
    P+'helpers/*',
    P+'helpers/'+X+'*',
    P+'helpers/'+X+X+'*',
    W+'*.common.js',
    W+'paths.js',
    W+'config.js',
  ].join(' ')

  return commonPaths
})()


const wpPaths = (() => {
  const _wpPath = path.resolve(rootPath, 'webpack')
  function mkWp() {
    return path.join(_wpPath, ...Object.values(arguments))
  }

  return {
    dev: mkWp('webpack.dev.js'),
    prod: mkWp('webpack.prod.js'),
  }
})()
function mkWp() {
  return path.join(wpPath, ...Object.values(arguments))
}

module.exports = {
  rootPath,
  wp: wpPaths,
  watch: watchPaths,
}
