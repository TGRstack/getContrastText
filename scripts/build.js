const { series, } = require('nps-utils') // rimraf, concurrent, setColors
const { watch, } = require('./_helpers')
const paths = require('./_paths.js')

module.exports = {
  description: 'Remove the previous build and run the compiler',
  default: 'nps build.prod',
  watch: watch(paths.watch, 'nps build.dev'),
  dev: {
    default: series.nps('scrub.build', 'build.dev.build'),
    build: 'npx webpack --config '+paths.wp.dev,
  },
  prod: {
    default: series.nps('commit.pre', 'scrub.build', 'build.prod.build'),
    build: 'npx webpack --config '+paths.wp.prod,
  },
}
