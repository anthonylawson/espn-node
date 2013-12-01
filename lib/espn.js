/**
* @module espn
* @author anthony.g.lawson@gmail.com (Anthony Lawson)
*/

var request = require('request'),
    _ = require('lodash'),
    package = require('../package.json');

/**
 * The base URL of the ESPN API used to build URLs
 * @const {string}
 */
var BASE_URL = 'https://api.espn.com/v1';

/**
 * The ESPN API key that is either set on the process or set explicitly
 * @private {string}
 */
var reqApiKey_ = '';

/**
 * Global options set for all requests
 * @private {object}
 */
var reqOptions_ = {};

/**
 * ESPN API Client
 * @param {string} url The URL to be used to make the request
 * @param {object} [params] The URL
 * @param [callback] The callback function
 * @returns {Client}
 * @constructor
 */
function Client(url, params, callback) {
    if (typeof callback === 'undefined') {
        callback = params;
        params = {};
    }

    this.callback = callback || _.noop;

    this.options = _.assign({}, reqOptions_);
    this.options.method = 'GET';
    this.options.uri = url;

    this.options.qs = {
        apiKey: reqApiKey_
    };

    if (typeof params === 'object') {
        _.assign(this.options.qs, params);
    }

    this.options.headers = {
        'Accept':'application/json',
        'User-Agent':'espn-node/' + package.version
    };

    this.get();

    return this;
}

/**
 * Parses the JSON response string and calls the callback function
 * @param {string} body The JSON body of a request response
 */
Client.prototype.parse = function(body) {
    var json, err;
    try {
        json = JSON.parse(body);
    } catch (e) {
        err = {
            message: 'Error Parsing Response',
            error: e
        }
    }

    this.callback(err, json);
};

/**
 * Makes the HTTP request to the ESPN API
 */
Client.prototype.get = function() {
    var self = this;

    if (!this.options.qs.apiKey) {
        if (process.env.API_KEY) {
            this.options.qs.apiKey = process.env.API_KEY;
        } else {
            self.callback({
                message: 'No API Key',
                error: null
            }, null);

            return;
        }
    }

    request(this.options, function(err, res, body) {
        if (err) {
            self.callback({
                message: 'Error Making Request',
                error: err
            }, null);

            return;
        }

        self.parse(body);
    });
};

/**
 * Sets the global request options
 * @param {object} options The request options
 * @returns {exports}
 */
exports.setOptions = function(options) {
    if (typeof options === 'object') {
        reqOptions_ = options;
    }

    return this;
};

/**
 * Sets the global ESPN API key for all requests
 * @param apiKey
 * @returns {exports}
 */
exports.setApiKey = function(apiKey) {
    if (typeof apiKey === 'string') {
        reqApiKey_ = apiKey;
    }

    return this;
};

/**
 * Exposes the 'Now' ESPN API
 * @param {object} [options] The request options
 * @param callback
 * @returns {Client}
 */
exports.now = function(options, callback) {
    return new Client(BASE_URL + '/now', options, callback);
};

/**
 * Exposes the 'Now Top' ESPN API
 * @param {object} [options] The request options
 * @param callback
 * @returns {Client}
 */
exports.nowTop = function(options, callback) {
    return new Client(BASE_URL + '/now/top', options, callback);
};

/**
 * Exposes the 'Now Popular' ESPN API
 * @param {object} [options] The request options
 * @param callback
 * @returns {Client}
 */
exports.nowPopular = function(options, callback) {
    return new Client(BASE_URL + '/now/popular', options, callback);
};
