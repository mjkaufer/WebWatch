module.exports = {
	delay: 30,//delay in minutes between each scrape
	url: "http://www.reddit.com/r/Jokes/top/?sort=top&t=hour",
	observe: {//a map of functions to return what the user desires to be tracked, along with the names of these attributes as the keys
		"jokeOfTheHour": function($){//given the $ selector from cheerio
			var things = $('.thing')

			for(var i = 0; i < things.length; i++){
				
				var thisThing = things[i]
				var rank = thisThing.attribs['data-rank']

				if(parseInt(rank) != 1)
					continue
				
				var url = thisThing.attribs['data-url']
				var $thisThing = $(thisThing)
				var $entry = $($thisThing.children('.entry')[0])
				var title = $($entry.children('.title')[0]).children('.title')[0].children[0].data
				
				return {
					title: title,
					url: url,
				}
			}
		}
	},
	dbFileName: "db.json"
}