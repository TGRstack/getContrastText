const { series, rimraf, } = require('nps-utils') // concurrent, setColors

const BUILD = 'dist/'

module.exports = {
  build: rimraf(BUILD),
  npm: {
    default: series.nps('scrub.npm.cache', 'scrub.npm.folders'),
    cache: 'npm cache clean --force',
    folders: rimraf('node_modules'),
  },
}
