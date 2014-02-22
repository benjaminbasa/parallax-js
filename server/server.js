/*! =========================================================================
 * Express Server for AngularJS web apps v0.0.1
 * Copyright 2014 (c) Pongstr Ordillo. MIT License.
 * ========================================================================= */

'use strict';

var express = require('express')
  , http    = require('http');


var App = express();

App.configure(function () {

  App.set('port', process.env.PORT || 4001);

  App.use('/assets', express.static(__dirname + '/../application/assets'));
  App.use('/includes', express.static(__dirname + '/../application/includes'));


  // 404 Forbidden 
  // Deny direct access to public directories
  App.use('/assets', function (req, res) {
    res.sendfile('application/error.html');
  });

  App.use('/includes', function (req, res) {
    res.sendfile('application/error.html');
  });

  App.all('/', function (req, res) {
    res.sendfile('application/index.html');
  });
  


});


http.createServer(App).listen(App.get('port'), function () {
  console.log('Express serving from http://localhost:' + App.get('port'));
});