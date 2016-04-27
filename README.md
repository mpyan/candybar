# candybar

Unwraps all arrays in a JSON object and replaces them with their first element. Great for handling objects containing single-element arrays.

## Install
`npm install candybar`

## Usage
```js
var candybar = require('candybar');

var arr = [{foo: "hi", bar: ["bar"]}, {foo: ["hello"], bar: "world"}];

candybar.unwrap(arr); // => arr = [{foo: "hi", bar: "bar"}, {foo: "hello", bar: "world"}];

```
