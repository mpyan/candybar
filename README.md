# candybar

Unwraps all arrays in an array of JSON objects and replaces each array with their first element. Great for handling objects containing single-element arrays.

## Install
`npm install candybar`

## Usage
```js
var candybar = require('candybar');

var arr = [{foo: "hi", bar: ["bar"]}, {foo: ["hello"], bar: "world"}];

candybar.unwrap(arr); // => arr = [{foo: "hi", bar: "bar"}, {foo: "hello", bar: "world"}];

```
