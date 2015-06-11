var config		= require('./config');
var exist 		= require('./sources/exist');
var twitter		= require('./sources/twitter');
var request		= require('request');
var CronJob 	= require('cron').CronJob;

function setupCron() {
	var minuteCron = new CronJob('00 */1 * * * *', function(){
		console.log('minute...');
	}, null, true);

	var hourlyCron = new CronJob('00 00 */1 * * *', function(){

	}, null, true);

	var dailyCron = new CronJob('00 00 00 */1 * *', dailyCalls, null, true);
}

// setupCron();

function dailyCalls(){
	exist.today();
}

twitter.process();
