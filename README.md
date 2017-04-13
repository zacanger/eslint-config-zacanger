# eslint-config-jane

--------

## Installation

`npm i -D eslint-config-jane` or `yarn add -D eslint-config-jane`

## Usage

```javascript
module.exports = {
  root: true,
  extends: 'eslint-config-jane'
  // any custom configs
}
```

## Development

Rules go in `config.json`. After editing, please run the file through
[jq](https://stedolan.github.io/jq/). Example: `jq . < config.json > tmp && mv
-f tmp config.json`, or in vim `:%!jq .`.

## LICENSE

[MIT](./LICENSE.md)
