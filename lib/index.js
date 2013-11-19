/**
 * @module espn
 * @author anthony.g.lawson@gmail.com (Anthony Lawson)
 */

var RestClient = require('./RestClient');

function init(apiKey) {
    return new RestClient(apiKey);
}

init.RestClient = RestClient;

module.exports = init;
