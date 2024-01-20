/*eslint no-console: 0*/
"use strict";

var express = require("express");
var port = process.env.PORT || 3000;
var server = require('http').createServer();
var app = express();  
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.route("/").get(function(req, res) {
	var text = require('fs').readFileSync("resume.json","utf8");
	res.write(text);
	res.end();
});


server.on("request", app);
server.listen(port, function(){
	console.log("HTTP Server: " + server.address().port );
});
