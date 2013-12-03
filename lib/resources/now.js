var Client = require('../client'),
    config = require('../config');

/**
 * Exposes the 'Now' ESPN API
 * @param {object} [options] The request options
 * @param callback
 * @returns {Client}
 */
exports.now = function(options, callback) {
    return new Client(config.BASE_URL + '/now', options, callback);
};

/**
 * Exposes the 'Now Top' ESPN API
 * @param {object} [options] The request options
 * @param callback
 * @returns {Client}
 */
exports.nowTop = function(options, callback) {
    return new Client(config.BASE_URL + '/now/top', options, callback);
};

/**
 * Exposes the 'Now Popular' ESPN API
 * @param {object} [options] The request options
 * @param callback
 * @returns {Client}
 */
exports.nowPopular = function(options, callback) {
    return new Client(config.BASE_URL + '/now/popular', options, callback);
};
