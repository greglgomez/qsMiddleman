var config = require('../config');
var request = require('request');
var _ = require('underscore');
var webhook = require('../destinations/webhook');

var options = {
  	url: config.exist.api,
  	headers: config.exist.key
};

// Returns an overview of the user's personal details, and their grouped attributes containing current values.
function today (callback) {
	request(options, processData);
}

function processData(error, response, body){
	if (!error && response.statusCode == 200) {
		var info = JSON.parse(body);
		var newData = transformDailyData(info.attributes);
		console.log(newData);
		webhook.update('quantified', 'quantified', newData);
	}
}

// Our function(doc) here will get called to handle each
// incoming document int he attributes array of the JSON stream

function transformDailyData(doc) {
	var activity = _.findWhere(doc, {group: 'activity'});
    var steps = _.findWhere(activity.items, {
        label: "Steps"
    });
    var activeMinutes = _.findWhere(activity.items, {
        label: "Active minutes"
    });
    var stepsGoal = _.findWhere(activity.items, {
        label: "Steps goal"
    });
    return {
        steps: !!steps.value ? steps.value : 0
        // activeMinutes: !!activeMinutes.value ? activeMinutes.value : 0,
        // stepsGoal: stepsGoal.value,
        // publish_date: 'now'
    };
}

var exist = {};
exist.today = today;

// These are the daily snippets of interesting info within users' data.
function insights (callback) {
	return request('GET', {
		url: options.url + "/insights/",
		headers: options.headers
	}, callback);
}

// Exports
module.exports = exist;
