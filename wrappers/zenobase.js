var config	= require('../config');
var request	= require('request');

// Zenobase API info - add your own values in config.js
var api  = config.zenobase.api;
var user = config.zenobase.user;
var key  = config.zenobase.key;


// Standard Callback
var callback = function (error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body);
	} else {
		console.log(error);
	};
};


// API Method Wrappers
module.exports = {

	//List Buckets
	// Example URL: 'https://api.zenobase.com/users/<user_id>/buckets/?limit=10'
	listBuckets: function () {
		request ({
			url: api + "/users/" + user + "/buckets/" + "?limit=" + 10,
			headers: key
		}, callback)
	},


	// List Events
	//	GET /buckets/<bucket_id>/?
	//	offset=<offset>&
	//	limit=<limit>&
	//	order=<order>&
	//	facet=<facet_expression>&
	//	q=<constraint_expression>
	listEvents: function(bucket, offset, limit, order, facet, constraint) {
		request({
			url: api +
			"/buckets/" + bucket + "/?" +
			"offset=" + offset +
			"&limit=" + limit +
			"&order=" + order +
			"&facet=" + facet +
			"&q=" + constraint,
			headers: key
		}, callback)

	}
};
