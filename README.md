# espn-node [alpha]

[![NPM](https://nodei.co/npm/espn.png?downloads=true&stars=true)](https://nodei.co/npm/espn/)

This is a helper library for the ESPN API.

```javascript
var espn = require('espn');

espn
    .setApiKey('YOUR_ESPN_API_KEY')
    .now( function (err, json) {
        if (err) {
            console.error(err);
            return;
        }

        console.log(json);
    });
```

## Installation

To use `espn-node` in your project, simply add the following to your `package.json` file:

```json
{
    ...
    "dependencies": {
        ...
        "espn": "0.0.4"
    }
}
```

Then run the following command to install the `espn-node` dependency as well as any others that are defined in the
`package.json` file:

```bash
npm install
```

### Alternate Installation

Instead of adding the dependency to a `package.json` file, you can download `espn-node` and all of its dependencies
locally but issuing the following command:

```bash
npm install espn
```

## Usage

To begin using the `espn-node` library, initialize an object with you ESPN API key:

```javascript
var espn = require('espn');

espn.setApiKey('YOUR_ESPN_API_KEY');
```

### Alternate API Key Setting

Instead of making an explicit call to `setApiKey`, you can set the API key on the process when you start up your
Node.js application by setting the following environment variable:

```bash
API_KEY=YOUR_API_KEY node index.js
```

Then you can make calls to the ESPN API:

```javascript
espn.now( function (err, json) {
    if (err) {
        console.error(err);
        return;
    }

    console.log(json);
}
```

### ESPN API Resources

There are several different types of ESPN APIs available. The following is a list of ESPN API resources provided by the
`espn-node` object:

#### Now API

+ `now`
+ `nowTop`
+ `nowPopular`

## RoadMap

**NOTE:** The current release (**0.0.4**) is currently a pre-release version and only implements the ESPN Now API.

+ **0.1**
  + Initial stable release that implements the ESPN Now API and Helper API
  + Testing setup
+ **0.2**
  + Implements the ESPN Headlines API
+ **0.3**
  + Implements the ESPN Athletes API
+ **0.4**
  + Implements the ESPN Teams API
+ **0.5**
  + Implements the ESPN Scores & Schedules API
+ **0.6**
  + Implements the ESPN Standings API
+ **0.7**
  + Implements the ESPN Research Notes API
+ **0.8**
  + Implements the ESPN WatchESPN API
+ **0.9**
  + Implements the ESPN Audio API
+ **0.10**
  + Implements the ESPN Video API
+ **0.11**
  + Implements the ESPN Calendar API
+ **0.12**
  + Implements the ESPN Medals API
+ **1.0**
  + Implements all ESPN APIs

## Author

**Anthony Lawson**

+ <https://twitter.com/anthonyglawson>
+ <https://github.com/alawson421>

## License

Licensed under the MIT License.
