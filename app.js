// A node twitter app by Billy Chia
// Use node.js to perform a serach on Twitter


var util = require('util'),
    twitter = require('twitter');

var twit = new twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

twit.get('/statuses/show/517515200661299200.json', {include_entities:true}, function(data) {
    console.log(util.inspect(data));
});
