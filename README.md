# pikkr ![](https://img.shields.io/circleci/project/github/melanieseltzer/pikkr.svg?style=flat)

> Don't what to choose? pikkr returns a random element from an array, so you don't have to.

## Install

```
$ npm install pikkr
```

## Usage

```js
import pikkr from 'pikkr';

// feed it an array of anything
const result = pikkr(['hi', 2, { name: 'Fred' }]);

console.log(result);
//=> randomly chosen element from the array is returned
```

## License

ISC © [Melanie Seltzer](https://github.com/melanieseltzer)
