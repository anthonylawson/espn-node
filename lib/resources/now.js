function Now(client) {
    var baseUrl = 'now';

    var api = {};

    api.now = function(callback) {
        // create object to hold request options
        var options = {};

        // set the url
        options.url = baseUrl;

        // create a query string object to hold URI parameters
        options.qs = {};

        // set the callback on the options
        options.callback = callback;

        return client.request(options);
    };

    api.nowTop = function(callback) {
        // create object to hold request options
        var options = {};

        // set the url
        options.url = baseUrl + '/top';

        // create a query string object to hold URI parameters
        options.qs = {};

        // set the callback on the options
        options.callback = callback;

        return client.request(options);
    };

    api.nowPopular = function(callback) {
        // create object to hold request options
        var options = {};

        // set the url
        options.url = baseUrl + '/popular';

        // create a query string object to hold URI parameters
        options.qs = {};

        // set the callback on the options
        options.callback = callback;

        return client.request(options);
    };

    return api;
}

module.exports = Now;
