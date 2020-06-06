// index.js

var express = require('express');
var app = express();

app.use(express.static('spa'));

const PORT = process.env.PORT || 8081;

app.listen(PORT, function () {
  console.log('listening on port', PORT);
});

//
