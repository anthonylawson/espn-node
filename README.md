# espn-node

[![NPM](https://nodei.co/npm/espn.png?downloads=true&stars=true)](https://nodei.co/npm/espn/)

This is a helper library for the ESPN API.

```javascript
var espn = require('espn')('ESPN_API_KEY');
espn.top( function(err, json) {
    if (err) return console.error(err);
    console.log(json);
}
```

## Installation

To use `espn-node` in your project, simply add the following to your `package.json` file:

```json
...
"dependencies": {
    ...
    "espn": "0.0.1"
}
```

Then run the following command to install the `espn-node` dependency as well as any others that are defined in the
`pacjage.json` file:

```bash
npm install
```

### Alternate Installation

Instead of adding the dependency to a `package.json` file, you can download `espn-node` and all of its dependencies
locally but issuing the following command:

```bash
npm install espn
```
