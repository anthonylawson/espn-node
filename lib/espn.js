/**
 * @module espn
 * @author anthony.g.lawson@gmail.com (Anthony Lawson)
 */

var client = require('./client');

function init(apiKey) {
    return new client(apiKey);
}

init.client = client;

module.exports = init;
