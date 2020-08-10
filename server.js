const express = require('express');
const http = require('http');
const path = require('path');
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const session = require('express-session');
const errorhandler = require('errorhandler');

var env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];

console.log('Using configuration', config);

require('./config/passport')(passport, config);

var app = express();

app.set('view engine', 'jade');
//app.engine('html', require('ejs').renderFile);
app.use(cookieParser());
app.enable('trust proxy'); // add this line
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session(
  {
    resave: true,
    saveUninitialized: true,
    secret: 'default',
    proxy: true // add this line
  }));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('combined'));
app.use(require("express-chrome-logger"));
app.use(express.static(path.join(__dirname, 'build')));



/*function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated())
 { 
  console.log('req.isAuthenticated = ' + req.isAuthenticated());
  return next(); }
  else{
	console.log('req.isAuthenticated = ' + req.isAuthenticated());
    res.redirect('/login');
  }
}

app.get('/*', ensureAuthenticated, (req, res) => {
  console.log("Default ---------")
  res.redirect('/home');
});*/


app.set('port', config.app.port);

require('./config/routes')(app, config, passport);

const httpServer = http.createServer(app);
httpServer.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});