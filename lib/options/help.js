const { program } = require('commander')

function help() {
  program.on('--help', () => {
    console.log('')
    console.log('说明：')
    console.log('  用于创建一个react项目')
    console.log('  TS + vite + redux + axios + less + router')
  })
}

module.exports = help
