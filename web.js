var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var buff = new Buffer (fs.readFileSync("index.html", "utf-8"));
  fs.writeFile(buff.toString("utf-8"), function (err) {
    if (err) throw err;
  });    
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
