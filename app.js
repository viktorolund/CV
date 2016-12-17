'use strict';

var express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 5000,
    bodyParser = require('body-parser'),
    routes = require('./app/router');

/**
 *  set port
 */
app.set('port', port);

/**
 *  set app engine
 */
app.engine('html', require('ejs').renderFile);

/**
 *  use dist as app root
 */
app.use('/', express.static(path.join(__dirname + '/dist')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 *  register routes
 */
app.use('/api', routes);

/**
 *  error handling
 */
app.use(function(req, res, next) {

  res.status(404).render(__dirname + '/app/error-404.html');
});

/**
 *  listen on port
 */
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
