require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db');

var User = sequelize.import('./models/user');

//Create table
sequelize.sync(); // tip: {force: true} for resetting tables

app.use(bodyParser.json());

app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));


app.use('/api/signup', require('./routes/signup'));
app.use('/api/login', require('./routes/login'));
app.use('/api/artist', require('./routes/artist'));
app.use('/api/socialLinks', require('./routes/socialLinks'));
app.use('/api/videos', require('./routes/videos'));



app.listen(3001, function(){
	console.log('App is listening on 3001.')
});



