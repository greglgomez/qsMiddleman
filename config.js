var config = {};

// Add an appropriately named object for logins, keys, etc.
config.exist = {};
config.zenobase = {};
config.webhook = {};
config.twitter = {};

// Exist.io
config.exist.api = 'https://exist.io/api/1/users/\$self';
config.exist.key = {
	'Authorization': ''
};

// Zenobase
config.zenobase.api = 'https://api.zenobase.com';
config.zenobase.user = '';
config.zenobase.key = '';

// Webhook
config.webhook.api = 'https://server.webhook.com';
config.webhook.site = '';
config.webhook.key = {
	'Authorization': ''
};

// Twitter
config.twitter.consumer_key = '';
config.twitter.consumer_secret = '';
config.twitter.access_token_key = '';
config.twitter.access_token_secret = '';

module.exports = config;
