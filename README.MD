# WebWatch

A tool to monitor changes in a website over time

## How To Use

* Clone the project and run `npm install`
* Edit `config.js` and change the following values as necessary
	* `delay` to the time you want to wait before re-scraping, in minutes - will parse to int
	*  `url` with the url you want to scrape
	* `observe` to a map of functions 
		* The function should return the value you are trying to track
		* The key of the map is the key under which the output of the function will be stored in the json database
* Run `node index.js` and let your data grow



## Todo

* Add support for phantomJS so we can track changes made via JS
* Add support for external DBs, like MongoDB
* Add graph generation