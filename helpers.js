const isInstalled = (pkgName) => {
  try {
    return !!require.resolve(pkgName)
  } catch (_) {
    return false
  }
}

const id = (a) => a
const keep = (a) => a.filter(id)

module.exports = {
  isInstalled,
  keep,
}
