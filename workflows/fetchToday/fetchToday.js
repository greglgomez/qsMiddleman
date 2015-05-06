var config		= require('../config'),
	exist		= require('../wrappers/exist'),
	webhook		= require('../wrappers/webhook'),

	bureaucat	= require('bureaucat'),
	template	= require('./template.js'),
	bc			= bureaucat(template),

	data		= require('../today.json');

bc(data);




// updating "today" stats in Webhook
// exist.today()				// GET latest "today" stats from exist.io API
// 	.pipe()					// pipe response through a json transform template
// 	.pipe(					// PUT data into Webhook
// 		webhook.update(
// 			author, 		// content type
//			author,			// content id
// 			data			// json with keys expected by Webhook.
// 		)
// 	);


// Pipe request to a file
// exist.today().pipe(fs.createWriteStream('../today.json'));


