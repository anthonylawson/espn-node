
var request = require('request'),
    package = require('../package.json');

/**
 * ESPN API REST Client
 * @param {string} apiKey API key used to make requests to the ESPN API
 * @constructor
 */
function RestClient(apiKey) {
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

    this.getNow = require('./resources/now')(this).getNow();
}

/**
 * Returns a URL that serves as the beginning of a ESPN API REST request
 * @returns {string} base URL for REST request to ESPN API
 */
RestClient.prototype.getBaseUrl = function() {
    return 'https://api.espn.com/' + this.apiVersion
};

/**
 * Returns the API key URL params to be appended to the end of an ESPN API REST request
 * @returns {string}
 */
RestClient.prototype.getApiKeyParam = function() {
    return '?apikey=' + this.apiKey;
};

/**
 *
 * @param options
 * @param callback
 */
RestClient.prototype.request = function (options, callback) {
    var client = this;

    options.url = client.getBaseUrl() + options.url + client.getApiKeyParam();

    options.headers = {
        'Accept':'application/json',
        'User-Agent':'espn-node/' + package.version
    }
};

module.exports = RestClient;