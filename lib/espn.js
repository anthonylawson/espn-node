/**
* @module espn
* @author anthony.g.lawson@gmail.com (Anthony Lawson)
*/

var _ = require('lodash'),
    helper = require('./resources/helper'),
    now = require('./resources/now');

/**
 * The ESPN API key that is either set on the process or set explicitly
 */
global.espnApiKey = '';

/**
 * Global options set for all requests
 */
global.espnReqOptions = {};

// extend the exports object to expose all resources
_.assign(exports, helper);
_.assign(exports, now);

/**
 * Sets the global request options
 * @param {object} options The request options
 * @returns {exports}
 */
exports.setOptions = function(options) {
    if (typeof options === 'object') {
        //reqOptions_ = options;
        global.espnReqOptions = options;
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
        //reqApiKey_ = apiKey;
        global.espnApiKey = apiKey;
    }

    return this;
};
