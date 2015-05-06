var config = require('../config');
var request = require('request');

var qsToday = {};
var qsInsights = {};

// Exist.io API info - add your own values in config.js
var options = {
  url: config.exist.api,
  headers: config.exist.key
};

// Standard callback
// function callback(error, response, body) {
//   if (!error && response.statusCode == 200) {
//   	console.log(body);
//   }
// }



// API Method Wrappers
module.exports = {

	// Today
	// Returns an overview of the user's personal details, and their grouped attributes containing current values. This is analogous to the "Today" tiles in the dashboard.

	today: function () {
		request(options, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var qsToday = JSON.parse(body);
				console.log("Retrieved your data successfully:")
				console.log("Username is " + qsToday.username + ".");
				console.log(
				"You have taken " +
				qsToday.attributes[0].items[0].value +
				" steps today.");
			} else {
				console.log(error);
			}
		})
	},


	// Insights
	// These are the daily snippets of interesting info we find within users' data.
	// Example URL: https://exist.io/api/1/users/\$self/insights/

	insights: function () {
		request({
			url: options.url + "/insights/",
			headers: options.headers
		}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var qsInsights = JSON.parse(body);
				console.log("Request sent ok:");
				console.log(body);
			} else {
				console.log("Error:");
				console.log(error);
			}
		})
	}
};
