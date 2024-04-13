// const { promisify } = require('util')
const { program } = require('commander')
const download = require('download-git-repo')

const { REACT_REPO, VUE_REPO } = require('../config/repo.js')
const execCommand = require('../utils/exec-command.js')
const { getPlatform } = require('../utils/index.js')
const { changePackageName } = require('../utils/files.js')

function downloadRepo(repo, project) {
  return new Promise((resolve, reject) => {
    download(
      repo,
      project,
      {
        clone: true,
      },
      (err) => {
        return err ? reject(err) : resolve()
      }
    )
  })
}

async function createAction(project, type) {
  console.log('开始创建项目', project)
  const repo = type === 'vue' ? VUE_REPO : REACT_REPO
  try {
    await downloadRepo(repo, project)
    console.error('项目下载成功！')

    changePackageName('react_vite_ts_templete', project)
    console.error('正在启动--')
    const npm = getPlatform() === 'win' ? 'npm.cmd' : 'npm'
    await execCommand(npm, ['install'], { cwd: `${project}` })
    await execCommand(npm, ['run', 'dev'], { cwd: `${project}` })
    console.log('启动完成！')
  } catch (err) {
    console.error('执行失败', err)
  }
}

function create() {
  program
    .command('create <project> [type]')
    .description('创建一个项目， 例如 lw_cli create my_react_app')
    .action(createAction)
}

module.exports = create
