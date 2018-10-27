var moment = require('moment');
var date = moment().format("llll");
console.log("*****************************")
console.log("Current time: " + date);
console.log("*****************************")

// Grab search command line argument
var search = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");

////////// Start Defaults//////////////
// By default, if no search type is provided, search for a tv show
if (!search) {
  search = "movie";
}

// By default, if no search term is provided, search for "Andy Griffith"
if (!term) {
  term = "The Cable Guy";
}
////////////End defaults////////////////////

// Print whether searching for a movie, song or band, print the term as well

///////////// OMDb //////////////////////////////////////// 
if (search === "movie") {
  console.log("Searching OMDb");
  // Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=8b2ed870";
var request = require("request");
// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(
  queryUrl, 
  function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("Main Actors: " + JSON.parse(body).Actors);
    console.log("Plot: " + JSON.parse(body).Plot);
  };
});

}


/////////////////// Spotify////////////////////////////////
if (search === "music") {
  console.log("Searching Spotify");
  var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "6c3aa1d196d4400db051e51045d3b97f",
  secret: "c9affdc4899e4203bdcd4e89d10dc866"
});
 
spotify
  .search({ type: 'track', query: term })
  .then(function(response) {
    var tracksUrl = response.tracks.href; 
    // ///////////////////////////
    var albumName1 = response.tracks.items[0].album.name;
    var songTitle1 = response.tracks.items[0].name;
    var artist1 = response.tracks.items[0].artists[0].name;
    ///////////////////////////////
    var albumName2 = response.tracks.items[1].album.name;
    var songTitle2 = response.tracks.items[1].name;
    var artist2 = response.tracks.items[1].artists[0].name;
    //////////////////////////////////////////
    var albumName3 = response.tracks.items[2].album.name;
    var songTitle3 = response.tracks.items[2].name;
    var artist3 = response.tracks.items[2].artists[0].name;
    /////////////////////////////////////////
    var albumName4 = response.tracks.items[3].album.name;
    var songTitle4 = response.tracks.items[3].name;
    var artist4 = response.tracks.items[3].artists[0].name;
    /////////////////////////////////////////
    var albumName5 = response.tracks.items[4].album.name;
    var songTitle5 = response.tracks.items[4].name;
    var artist5 = response.tracks.items[4].artists[0].name;
    console.log("//////////////////////////////////////////////////////////////////////////////////////////")
    console.log("This is my track wide search url | " + tracksUrl);
    console.log("===================================================================");
    console.log("This is the name of the most relevant album title | " + albumName1);
    console.log("This is the most relevant song title on the album | " + songTitle1);
    console.log("Artist name | " + artist1);
    console.log("===================================================================");
    console.log("This is the 2nd name of the most relevant album title | " + albumName2);
    console.log("This is the most relevant song title on the album | " + songTitle2);
    console.log("Artist name | " + artist2);
    console.log("===================================================================");
    console.log("This is the name 3rd of the most relevant album title | " + albumName3);
    console.log("This is the most relevant song title on the album | " + songTitle3);
    console.log("Artist name | " + artist3);
    console.log("===================================================================");
    console.log("This is the name of the 4th most relevant album title | " + albumName4);
    console.log("This is the most relevant song title on the album | " + songTitle4);
    console.log("Artist name | " + artist4);
    console.log("===================================================================");
    console.log("This is the name of the 5th most relevant album title | " + albumName5);
    console.log("This is the most relevant song title on the album | " + songTitle5);
    console.log("Artist name | " + artist5);
    
  })
  .catch(function(err) {
    console.log(err);
  });


/////////////// Bands in town /////////////////////////////////////////////////  
} if (search === "band") {
  console.log("Searching Bands in town")
  console.log("######################################################")
  var APP_ID = "05f5ee4541700f47b4da46d4138a3d3d";
var queryURL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=" + APP_ID;
var request = require("request");
var moment = require('moment');
var date = moment().format("llll");
// console.log(date);
// console.log(queryURL);
request(
    queryURL, 
    function(error, response, data){
      var baseInfo = JSON.parse(data);
      var firstEvent = baseInfo[0].venue.name;
      var firstEventCountry = baseInfo[0].venue.country;
      var firstEventCity = baseInfo[0].venue.city;
      // var secondEvent = baseInfo[1].venue.name;
      // var secondEventCountry = baseInfo[1].venue.country;
      // var secondEventCity = baseInfo[1].venue.city;
      // var thirdEvent = baseInfo[2].venue.name;
      // var thirdEventCountry = baseInfo[2].venue.country;
      // var thirdEventCity = baseInfo[2].venue.city;
      //console.log(data);
        console.log("Next upcoming event");
        console.log("============================================")
        console.log("Venue: ")
        console.log(firstEvent);
        console.log("Country: ")
        console.log(firstEventCountry);
        console.log("City:")
         console.log(firstEventCity);
    ////////////////////////////////////////////
      //   console.log("2nd most upcoming event");
      //   console.log(secondEvent);
      //   console.log(secondEventCountry);
      //   console.log(secondEventCity);
      //  //////////////////////////////////////////
      //   console.log("3rd most upcoming event");
      //   console.log(thirdEvent);
      //   console.log(thirdEventCountry);
      //   console.log(thirdEventCity);
        
      });
};
