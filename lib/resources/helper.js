var Client = require('../client'),
    config = require('../config');

exports.sports = function(options, callback) {
    return new Client(config.BASE_URL + '/sports', options, callback);
};
