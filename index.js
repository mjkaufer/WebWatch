var config = require('./config.js')
var cheerio = require('cheerio')
var request = require('request')
var low = require('lowdb')
var storage = require('lowdb/file-sync')

var db = low(config.dbFileName || 'db.json', { storage })
var configKey = "_WebWatchConfig"

db(configKey).remove({})
db(configKey).push(config)


function refreshPage(){
	request(config.url, function(e, r, html){
		if(e)
			return console.log("Oh no! Error",e);

		var $ = cheerio.load(html)
		
		for(var key in config.observe){

			var func = config.observe[key]
			var data = func($)

			data['_WebWatchTimestamp'] = Date.now()

			db(key).push(data)
		}

		console.log("Updated DB", new Date().toUTCString())
	})	
}
refreshPage()
setInterval(refreshPage, (parseInt(config.delay) || 10) * 60 * 1000)

