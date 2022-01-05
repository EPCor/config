# `@epcor/prettier-config`

> Best prettier config

## Usage

```sh
npm i -D @epcor/prettier-config;
```

`@epcor/prettier-config` does not install `prettier` for you. You must install these yourself.

Then, in your .prettierrc.\*:

```js
module.exports = {
  ...require('./packages/prettier-config'),
  // others options
};
```
