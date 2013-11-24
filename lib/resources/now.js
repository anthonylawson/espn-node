module.exports = function(client) {

    var baseUrl = 'now';

    function Now() {
        this.getNow = function(callback) {
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
    }

    return Now;
};
