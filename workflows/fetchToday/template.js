data		= require('../today.json');

module.exports = {
	"productivity": [
		data.attributes[1].items[0].value,
		data.attributes[1].items[1].value,
		data.attributes[1].items[2].value
	],
	"sleep": data.attributes[3].items[0].value,
	"steps": data.attributes[0].items[0].value,
	"tracks": data.attributes[7].items[0].value,
	"tweets": data.attributes[8].items[0].value
};


// locations taken from exist.today();
// ---- Step Count ----
// qsToday.attributes[0].items[0].value

// ---- Productivity ----
// Productive Time
// qsToday.attributes[1].items[0].value
// Neutral Time
// qsToday.attributes[1].items[1].value
// Distracting Time
// qsToday.attributes[1].items[2].value

// ---- Sleep ----
// ---- Sleep Count ----
// qsToday.attributes[3].items[0].value

// ---- Location ----
// ---- Current Location ----
// qsToday.attributes[6].items[0].value

// ---- Media ----
// ---- Tracks Played ----
// qsToday.attributes[7].items[0].value

// ---- Twitter ----
// ---- Tweet Count ----
// qsToday.attributes[8].items[0].value
