var package = require('../package.json'),
    _ = require('lodash'),
    request = require('request');

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

    this.options = _.assign({}, global.espnReqOptions);
    this.options.method = 'GET';
    this.options.uri = url;

    this.options.qs = {
        apiKey: global.espnApiKey
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

module.exports = Client;
