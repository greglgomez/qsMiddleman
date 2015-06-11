var config = require('../config');
var request = require('request');

function Exist () {
	// Exist.io API info - add your own values in config.js
	this.options = {
	  	url: config.exist.api,
	  	headers: config.exist.key
	};
}

// API Method Wrappers
Exist.prototype = {
	// Returns an overview of the user's personal details, and their grouped attributes containing current values.
	today: function (callback) {
		return request(this.options, callback);
	},
	// These are the daily snippets of interesting info within users' data.
	insights: function (callback) {
		return request('GET', {
			url: this.options.url + "/insights/",
			headers: this.options.headers
		}, callback);
	}
};

// Exports
module.exports = config;
