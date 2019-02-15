const filePaths = [
  "src/**/*.ts",
  "src/**/**/*.ts",
  "src/**/**/**/*.ts",
  "src/**/**/**/**/*.ts",
  "src/**/**/**/**/**/*.ts",
  "scripts/test.js",        // this file
  "jest.config.js",
  "package.json",
].join(' ')

module.exports = {
  default: 'jest',
  update: 'jest -u',
  watch: 'chokidar '+filePaths+' -c \"nps test\" --initial --verbose',
}
