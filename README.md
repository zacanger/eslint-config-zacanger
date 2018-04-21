# eslint-config-zacanger

Zac Anger's Eslint config.

--------

My rules are heavily based on [Standard](https://standardjs.com/).

## Installation

`npm i -D eslint-config-zacanger`

You'll also need to install some plugins (`peerDependencies`), at least until
there's some sort of resolution for [this
issue](https://github.com/eslint/eslint/issues/3458):

`npm i -D babel-eslint eslint-plugin-babel eslint-plugin-promise
eslint-plugin-import eslint-plugin-unicorn`.

Optionally, you can also install any or all of:

* `eslint-plugin-jsx-a11y`
* `eslint-plugin-react`

If they're installed, their rules will be used.

## Usage

.eslintrc.json
```json
{
  "root": true,
  "extends": "eslint-config-zacanger",
  "rules": {
    "your custom configs": "go here"
  }
}
```

## LICENSE

[MIT](./LICENSE.md)
