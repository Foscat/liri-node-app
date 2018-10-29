# liri-node-app

This app takes in command line inputs and searches through differtant apis to give you info back.
 
What info you get back depends on what api you use in your search.

The first word you put in the command line after node liri-bot.js is your api selector.

music = spotify api

movie = OMDb api

band = bandsintown api

The input after that will be read as the search query.

There is no need for "" marks around your search due to the way the app is coded.

If you put in music as your search param you will get a response like this.

![Alt text](https://github.com/Foscat/liri-node-app/blob/master/node-app/spotify.png)

The moment.js will always fire whenever you make a search request and tell you the time you submitted the request.

The spotify search is designed to give you the top 5 closest search results for your input.

-----------------------------------------------------------------------------------------------------------------------------

If you put movie as your search param you will get a response like this.

![Alt text](https://github.com/Foscat/liri-node-app/blob/master/node-app/omdb.png)

The app is designed to give you the long version of the plot so that you can get the best idea of what the movie is about.

Along with the title and release year it also give you a list of all the main actors.

--------------------------------------------------------------------------------------------------------------------------------

If you put band into your search param you will get a response like this.

![Alt text](https://github.com/Foscat/liri-node-app/blob/master/node-app/bandsintown.png)

It will tell you the name of the next 3 upcoming events scheduled.

It gives you the Venue its being held at, the Country its happening in and the City it which its being held in.




