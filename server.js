// const express = require('express');
// const app = express();
// const port = 3000; // specifying the port number
// const path = require('path'); // lines 4 to 11 are for connecting localhost:3000/ to the index
// const routes = require('./routes/index'); //determining the route
// const user = require('.routes/user'); //requires user module from user.js


// app.use(logger('combined'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());


// // view engine setup 
// app.set('views', path.join(__dirname, 'views'));
// app.set('public', path.join(__dirname, 'public'));
// app.set('view engine', 'ejs');


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '/public')));
// app.use('/', routes);
// app.use('/user',user);

// app.get('/', function(req, res) {  // this is connecting the app to the index.ejs that was previously before index.html 
// 	res.render('index.ejs');
// });

// app.get('/', function(req, res) {  // this is connecting the app to the user.ejs that was previously before index.html 
// 	res.render('user.ejs');
// });

// //listen to the port
// app.listen(port, function() {
// 	console.log('Example app listening on port: ' + port);
// 	console.log('http://localhost:' + port + "/");
// });

// module.exports = app; //module.exports - object that the current module returns when it is "required" in another program or module


var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var port = 3000;

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', routes);

app.listen(port, function() {
  console.log('Listening in on port' + port);
});

module.exports = app;







