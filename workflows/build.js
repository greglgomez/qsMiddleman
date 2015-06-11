var request = require('request');
// ---- Webhook ----
var whSite = 'greglgomez';
var whKey = '5677d297-6e87-4969-ac15-1955558e8100';
var whBaseURL = 'https://server.webhook.com/';
var whAuth = '/?site=' + whSite + '&apiKey=' + whKey;

// whBuildSite
// Example URL: 'https://server.webhook.com/build/?site=siteName&apiKey=12345'
// This is the endpoint used to trigger a build for a site immediately, there is no data associated with this request, just query string parameters.

// sets API method
var whBuild = 'build';
var whBuildSite = request.post({url: whBaseURL + whBuild + whAuth}, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body)
		console.log(response)
	}
});
