var config = require('../config');
var request = require('request');

// Webhook API info - add your own values in config.js
var site = config.webhook.site;
var key = config.webhook.key;
var api = config.webhook.api;
var auth = '?site=' + site + '&apiKey=' + key;


// API Method Wrappers
module.exports = {

	// Build Site
	// Example URL: 'https://server.webhook.com/build/?site=<siteName>&apiKey=<12345>'
	// This is the endpoint used to trigger a build for a site immediately, there is no data associated with this request, just query string parameters.

	build: function(){
		request.post({url: api + "/build/" + auth}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(body)
			}
		})
	},


	// Add Item
	// This endpoint can be used to insert data into the database.
	// Example URL: https://server.webhook.com/add-item/?site=mySiteName&apiKey=12345&type=contentTypeName
	// Header and Data: POST -H "Content-Type: application/json" -d '{"publish_date": "now", "name" : "Name of Item"}'

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
	},


	// Update an Item
	// This endpoint can be used to update already existing data in the database.
	// Example URL: https://server.webhook.com/update-item/?site=mySiteName&apiKey=12345&type=contentTypeName&id=-JbDZYVn5DfPDEGbDXhD
	// Header and Data: POST -H "Content-Type: application/json" -d '{"publish_date": "10-2-1990 10:00:00"}'

	// Update Item function takes content id and data.
	update: function(type, id, data) {
		request({
			url: api + "/update-item/" + auth +
				"&type=" + type +
				"&id=" + id,
			headers: {
				"Content-Type": "application/json",
				"name": ""
			}
		}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(body)
			}
		});
	},


	// Delete an Item
	// This endpoint can be used to delete an already existing item in the database.
	// Example URL: https://server.webhook.com/delete-item/?site=mySiteName&apiKey=12345&type=contentTypeName&id=-JbDZYVn5DfPDEGbDXhD

	delete: function(type, id) {
		request({
			url: api + "/delete-item/" + auth +
				"&type=" + type +
				"&id=" + id
		});
	}
};
