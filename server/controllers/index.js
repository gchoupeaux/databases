var models = require('../models');
var express = require('express');
//var fs = require('fs');

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log('Got a GET request for /classes/messages');
      // read database
      models.messages.get(function(result) {
        // console.log('Text array: ', result);
        res.writeHead(200, defaultCorsHeaders);  
        result = {results: [{username: 'Jerry', text: 'Hello', roomname: 'lobby', objectId: '2'}]};
        res.end(JSON.stringify(result));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var result = {results: [{username: 'Jerry', text: 'Hello2', roomname: 'lobby', objectId: '3'}]};
      //var temp = req.body; 
      req.on('data', function(data) {
        var body = '';
        body += data;
        console.log('Got a POST request for /classes/messages: ', body);
        models.messages.post(JSON.parse(body));
      });
      // write database
      res.writeHead(201, defaultCorsHeaders);
      res.end(JSON.stringify(result));
    }, // a function which handles posting a message to the database

    options: function(req, res) {
      // console.log('answer to options');
      res.writeHead(200, defaultCorsHeaders);
      res.end('');
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      // console.log('Got a POST request for /classes/users: ', req.body);
      models.users.post(req.body);
      res.writeHead(201, defaultCorsHeaders);
      res.end('');
      
    }
  }
};

