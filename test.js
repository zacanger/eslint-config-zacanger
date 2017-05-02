const test = require('tape')

test('eslint config is valid', (t) => {
  const { CLIEngine } = require('eslint')
  const c = new CLIEngine({
    useEslintrc: false,
    configFile: 'config.json'
  })

  t.ok(c.executeOnText('const foo = 2\n'))
  t.end()
})
