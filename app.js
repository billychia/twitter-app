var util = require('util'),
    twitter = require('twitter');
    config = require('./config.js');

var twit = new twitter({
    consumer_key: config.CONSUMER_KEY,
    consumer_secret: config.CONSUMER_SECRET,
    access_token_key: config.ACCESS_TOKEN_KEY,
    access_token_secret: config.ACCESS_TOKEN_SECRET
});


twit.get('/statuses/show/517515200661299200.json', {include_entities:true}, function(data) {
    console.log(util.inspect(data));
});
