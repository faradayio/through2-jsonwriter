# through2-jsonwriter
A simple transform stream that stringifies JSON

## Installation

```console
npm install through2-jsonwriter
```

or

```console
npm install --save through2-jsonwriter
```

## Usage

```javascript
var jsonWriter = require('through2-jsonwriter');

var stringifier = jsonWriter();

stringifier.write({hello: 'world'});

stringifier.pipe(process.stdout); //outputs {"hello":"world"}
```