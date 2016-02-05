![alt text](http://localhost:5000/assets/images/bloc_jams_logo.png "Bloc Jams")

Bloc Jams is a music application that uses [Node.js](https://www.npmjs.com/), [Express](http://expressjs.com/), and [Bower](http://bower.io/). It allows the user to play music with interactive scroll bars and volume controls using the latest [AngularJS](https://angularjs.org/) technology.

**Application Link**: [https://intense-retreat-91135.herokuapp.com/#/](https://intense-retreat-91135.herokuapp.com/#/)


## How does it work?
Scroll through the home page and view the random artwork that is presented. Afterwards, click on the "collection" button in the top right-hand side of the screen. It will take you to a different view instantly thanks to AngularJS and show you a myriad of albums. Click on a random album and play a song, but ensure that your volume is turned on.

## Package Manager Definitions
[Node.js](https://www.npmjs.com/) - The directory into which Node installs its app-specific packages

[Bower](http://bower.io/) - is a package manager for Javascript libraries that allows you to define, version, and retrieve your dependencies

## Languages Used

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
* [Sass](http://sass-lang.com/)
* Had some jQuery, but switched over to [AngularJS](https://angularjs.org/)

## Installation Steps
You should already have [Node.js](https://www.npmjs.com/), and [Bower](http://bower.io/) installed before cloning.
Start by cloning the repository.

`$ git clone https://github.com/ColoradoWebGuy/bloc-jams-angular`

Once that's complete, install the remaining dependencies by running

`$ npm install`

## Running the Application

Two tabs must be open in the terminal in order to run this application.

In one tab, run
`$ node web.js`

In another tab,

`Use this terminal for git commands`

The application runs on port 5000. To change the port, modify the number highlighted below in `web.js`

```javascript
var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);
```
