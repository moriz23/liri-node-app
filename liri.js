var fs = require('fs');
var keys = require("./key.js");
var twitter = require("twitter");
var spotify = require("spotify");
var request = require("request");
var params = process.argv.slice(2);

switch(params[0]) {
  case "my-tweets":
    twitterStatus();
    break;
  case "spotify-this-song":
    if(params[1]){
      spotifySong(params[1]);
    } else {
      spotifySong("What's may age again?");
    }
    break;
  case "movie-this":
    if(params[1]){
      movieName(params[1]);
    } else
      movieName("Mr. Nobody");
    break;
}