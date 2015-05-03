var request	= require("request");
var fs		= require("fs");

request("http://www.sitepoint.com").pipe(fs.createWriteStream("jspro.htm"));
