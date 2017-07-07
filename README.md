# eslint-config-jane

Shared eslint config for front-end projects at [Jane](https://jane.com).

--------

## Installation

`npm i -D eslint-config-jane` or `yarn add -D eslint-config-jane`

## Usage

.eslintrc
```json
{
  "root": true,
  "extends": "eslint-config-jane"
  // any custom configs
}
```

## Notes

Our rules are heavily based on [Standard](https://standardjs.com/).

Most rules only warn. Exceptions (rules that error):

* `comma-dangle`: _never_
* `eol-last`
* `indent`: _2, `SwitchCase` 1_
* `new-cap`: _`newIsCap` true, `capIsNew` false_
* `no-duplicate-imports`
* `no-eval`
* `no-extend-native`
* `no-global-assign`
* `no-mixed-tabs-and-spaces`
* `no-tabs`
* `no-undef`
* `no-undef-init`
* `no-with`
* `quotes`: _single, avoidEscape true_
* `unicode-bom`: _never_
* `unicorn/filename-case`: _kebab_

## Development

Rules go in `config.json`. After editing, please run the file through
[jq](https://stedolan.github.io/jq/). Example: `jq . < config.json > tmp && mv
-f tmp config.json`, or in vim `:%!jq .`.

## LICENSE

[MIT](./LICENSE.md)
