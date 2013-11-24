
var request = require('request'),
    package = require('../package.json');

/**
 * ESPN API REST Client
 * @param {string} apiKey API key used to make requests to the ESPN API
 * @constructor
 */
function client(apiKey) {
    // if no API key is provided, check for a process environment variable API key
    if (!apiKey) {
        if (process.env.API_KEY) {
            // set the API key from the process environment variable
            this.apiKey = process.env.API_KEY;
        } else {
            // No API key was passed in nor was a process environment variable detected
            throw new Error("No API Key Detected");
        }
    } else {
        // set the API key that was passed in
        this.apiKey = apiKey;
    }

    // only API version 1 is available
    this.apiVersion = 'v1';

    var now = require('./resources/now')(this);
    this.getNow = now.getNow;
}

/**
 * Returns a URL that serves as the beginning of a ESPN API REST request
 * @returns {string} base URL for REST request to ESPN API
 */
client.prototype.getBaseUrl = function() {
    return 'https://api.espn.com/' + this.apiVersion
};

/**
 *
 * @param {object} options request options
 */
client.prototype.request = function (options) {
    var client = this;

    options.method = 'GET';
    options.url = client.getBaseUrl() + options.url;
    options.qs.apiKey = this.apiKey;

    options.headers = {
        'Accept':'application/json',
        'User-Agent':'espn-node/' + package.version
    };

    request(options, function (err, response, body) {
        var error, data;

        try {
            data = err || !body ? {status: 'error', message: 'No Body in Response'} : JSON.parse(body);
        } catch (e) {
            data = {status: 'error', message: e.message || 'JSON Parse Exception'};
        }
        if (err || (response && response.statusCode != 200)) {
            error = {};

            if (response) {
                error.status = response.code;
                error.message = response.message;
            } else {
                error.status = err.code;
                error.message = 'Error reaching host: ' + options.url;
            }
        }

        if (options.callback && (typeof options.callback === 'function')) {
            options.callback(error, data);
        }
    });
};

module.exports = client;
