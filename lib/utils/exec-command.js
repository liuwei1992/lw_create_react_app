const { spawn } = require('child_process')
function execCommand(...args) {
  return new Promise((resolve, reject) => {
    // 开启子进程执行命令
    const childProcess = spawn(...args)

    // 获取子进程的输出和错误信息
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)

    // 监听子进程执行结果
    childProcess.on('close', resolve)
  })
}

module.exports = execCommand
