# is-nodelist
> is a NodeList object?

Because `obj instanceof NodeList` isn't reliable.

## Install

```
$ npm install --save is-nodelist
```

## Usage

```js
var isNodelist = require('is-nodelist');

isNodelist(document.querySelectorAll('h1')); // true;
```

## License

MIT © [hemanth.hm](http://h3manth.com)
