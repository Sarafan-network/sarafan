// index.js

var express = require('express');
var app = express();

app.use(express.static('spa'));

app.listen(80, function () {
  console.log('listening on port 80');
});

//
