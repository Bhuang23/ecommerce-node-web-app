var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

// Express Route
const studentRoute = require('./user/userroute')

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/database';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/users', studentRoute)


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})
