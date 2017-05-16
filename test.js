const assert = require('assert')

const { CLIEngine } = require('eslint')
const c = new CLIEngine({
  useEslintrc: false,
  configFile: 'config.json'
})

assert.ok(c.executeOnText('const foo = 2\n'), 'not ok')
