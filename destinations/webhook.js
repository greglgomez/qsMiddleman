var config = require('../config');
var request = require('request');

// Webhook API info - add your own values in config.js
var site = config.webhook.site;
var key = config.webhook.key.Authorization;
var api = config.webhook.api;
var auth = '?site=' + site + '&apiKey=' + key;


// API Method Wrappers
module.exports = {
	// Add Item
	// This endpoint can be used to insert data into the database.
	// Example URL: https://server.webhook.com/add-item/?site=mySiteName&apiKey=12345&type=contentTypeName
	// Header and Data: POST -H "Content-Type: application/json" -d '{"publish_date": "now", "name" : "Name of Item"}'

	// Add Item function takes content type and data.
	add: function(type, data) {
		request({
			url: api + "/add-item/" + auth + "&type=" + type,
			method: 'POST',
			json: true,
			body: data
		}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(body);
			}else{
				console.log(error);
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
			url: api + "/update-item/"
			+ auth
			+ "&type="
			+ type
			+ "&id="
			+ id,
			method: 'POST',
			json: true,
			body: data
		}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(body);
			}else{
				console.log(error);
			}
		});
	}
};
