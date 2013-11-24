espn-node
=========

[![NPM](https://nodei.co/npm/espn.png)](https://nodei.co/npm/espn/)

This is a helper library for the ESPN API.

``` javascript
var espn = require('espn')('ESPN_API_KEY');
espn.top( function(err, json) {
    if (err) return console.error(err);
    console.log(json);
}
```