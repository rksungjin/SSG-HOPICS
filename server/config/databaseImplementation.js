const mongoose 			 = require('mongoose');
const configDB = require('./databaseCreds');
// mongoose.connect(configDB.url);

//Get the default connection
mongoose.connect("mongodb://richardkim:b3wh910w@ds219432.mlab.com:19432/heroku_64jfqms9");
//<dbuser>:<dbpassword>@ds219432.mlab.com:19432/heroku_64jfqms9
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function() {
  console.log("Mongoose connection successful.");
});
