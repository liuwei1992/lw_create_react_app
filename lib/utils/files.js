const fs = require('fs')
const path = require('path')

function changePackageName(oldName, project) {
  const currentDir = process.cwd()
  const projectDir = `${currentDir}/${project}/`

  const packageFile = fs.readFileSync(
    path.resolve(projectDir, './package.json'),
    { encoding: 'utf8' }
  )

  const newPackageFile = packageFile.replace(oldName, project)

  fs.writeFileSync(path.resolve(projectDir, './package.json'), newPackageFile)
}

module.exports = {
  changePackageName,
}
