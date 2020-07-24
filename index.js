const express = require('express');
const path = require('path');

const app = express();

// passa o express para o http-server
const http = require('http').Server(app);

app.use(express.static(path.join(__dirname, 'ui/resources/webapp')));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());

app.get("/resume",function(req, res) {
	var text = require('fs').readFileSync("./js/resume.json","utf8");
	res.write(text);
	res.end();
});





app.set('port', process.env.PORT  || 8080);


http.listen(app.get('port'), function() {
  console.log(`Server started on port ${app.get('port')}`);
  console.log(`Version 1.0.0`);
});

/* app.listen(app.get('port'), () => {
  console.log(`Server started on port ${app.get('port')}`);
}); */