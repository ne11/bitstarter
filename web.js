#!/usr/bin/env node

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  console.log("in get loop");
  var fs = require('fs');
  var bufindex = fs.readFileSync("index.html", "utf-8");
  response.send(fs.writeFile(bufindex.toString()));
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
