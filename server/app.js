var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../client/dist')));


app.use(users);   /// Aici este problema daca mut linia asta sub app.get('*') rutele din angular nu mai ajung la server


///////////////// Send all other requests to Angular app///////////////////////////////////////////////////////////
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});



module.exports = app;
