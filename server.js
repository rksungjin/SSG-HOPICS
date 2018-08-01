// Dependencies
// ============
var express        = require('express');
var path           = require('path');
var logger         = require('morgan');
var cookieParser   = require('cookie-parser'); // for working with cookies
var bodyParser     = require('body-parser');
var passport 			 = require("./config/passport");
var config				 = require("./config/extra-config");

// Express settings
// ================

// instantiate our app
var app            = express();

// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(passport.initialize());

app.get('*', (req, res) => {
  // res.sendFile(__dirname + "/public/index.html");
  var testHtmlPath = path.resolve(__dirname, '..', 'public', 'index.html');
  res.sendFile(testHtmlPath);
})

require('./routes')(app);

require('./config/databaseImplementation');
//Set up default mongoose connection


// our module get's exported as app.
module.exports = app;


// Where's the listen? Open up bin/www, and read the comments.



// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const routes = require("./routes");
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Define middleware here
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
