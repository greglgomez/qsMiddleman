var config = require('../config');
var request = require('request');

// Webhook API info - add your own values in config.js
var site = config.webhook.site;
var key = config.webhook.key;
var api = config.webhook.api;
var auth = '?site=' + site + '&apiKey=' + key;


// API Method Wrappers
module.exports = {

	// build site
	// Example URL: 'https://server.webhook.com/build/?site=<siteName>&apiKey=<12345>'
	// This is the endpoint used to trigger a build for a site immediately, there is no data associated with this request, just query string parameters.

	build: function(){
		request.post({url: api + "/build/" + auth}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(body)
			}
		})
	},


	// add item
	// This endpoint can be used to insert data into the database.
	// Example URL: https://server.webhook.com/add-item/?site=mySiteName&apiKey=12345&type=contentTypeName
	// Header and data: POST -H "Content-Type: application/json" -d '{"publish_date": "now", "name" : "Name of Item"}' \

	// Add Item function takes content type and data.
	insert: function(type, data) {
		request({
			url: api + "/add-item/" + auth + "&type=" + type,
			headers: {
				"Content-Type": "application/json",
				"name": ""
			}
		}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(body)
			}
		});
	}
};
