var config 	= require('../config');
var request = require('request');
var _ 		= require('underscore');
var webhook = require('../destinations/webhook');
var Twitter = require('twitter');
var loki	= require('lokijs');

var db 		= new loki('db.json');

var tweetList = db.addCollection('tweets');

function process() {
	var client = new Twitter({
	  consumer_key: config.twitter.consumer_key,
	  consumer_secret: config.twitter.consumer_secret,
	  access_token_key: config.twitter.access_token_key,
	  access_token_secret: config.twitter.access_token_secret
	});

	var params = {screen_name: 'greglgomez'};

	client.get('statuses/user_timeline', params, function(error, tweets, response){
		if (!error) {
			var apiIds = _.pluck(tweets, 'id');
			var oldIds = db.getCollection('tweets').data;
			var newIds = _.difference(apiIds, oldIds);

			var newTweets = _.filter(tweets, function(tweet){
				return _.contains(newIds, tweet.id);
			});

			console.log(newTweets);
			// send newtweets to webhook
			// store newids in db on success
		}
	});
}



module.exports = {process: process};
