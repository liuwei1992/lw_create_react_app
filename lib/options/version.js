const { program } = require('commander')

function version() {
  const version = require('../../package.json').version
  program.version(version, '-v --version')
}

module.exports = version
