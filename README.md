# Denomination Currency

A small library that adds commas to numbers

## Installation
```$ npm install denomination --save```

Usage

```
var denomination = require('denomination');
var fragments = [1e5, 5e4, 2e4, 1e4, 5e3, 2e3, 1e3, 500, 100, 50];

var formatted = denomination(fragments, 356660);
```
### Output should be as array object

```[ { notes: 100000, counter: 3 },
{ notes: 50000, counter: 1 },
{ notes: 5000, counter: 1 },
{ notes: 1000, counter: 1 },
{ notes: 500, counter: 1 },
{ notes: 100, counter: 1 },
{ notes: 50, counter: 1 } ]```


## Tests

  ```$ npm test```

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
