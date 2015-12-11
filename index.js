var nconf = require('nconf');
var API = require('./lib/ApiRequest');

module.exports = {
    init: function(options) {
        if (!options.client_secret) throw new Error("client_secret must be provided");
        if (!options.client_id) throw new Error("client_id must be provided");
        
        var sandbox = options.sandbox || !options.production;

        nconf.use('memory');

        nconf.set('uber_api_client_secret', options.client_secret);
        nconf.set('uber_api_client_id', options.client_id);
        nconf.set('uber_api_server_token', options.server_token);
        nconf.set('uber_api_sandbox', sandbox);
        nconf.set('uber_api_sandbox', sandbox);

        return API.getToken();
    },
    Delivery: require('./lib/Delivery'),
    Location: require('./lib/Location'),
    Quote: require('./lib/Quote'),
    Item: require('./lib/Item'),
    Contact: require('./lib/Contact')
};