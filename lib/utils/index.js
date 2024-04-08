function getPlatform() {
  let platform
  switch (process.platform) {
    case 'darwin':
      platform = 'mac'
      break
    case 'win32':
      platform = 'win'
      break
  }
  return platform
}

module.exports = {
  getPlatform,
}
