var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname +'/index.html');
});

app.get('/src/ch01/ex01.html', function (req, res) {
  res.sendFile(__dirname +'/src/ch01/ex01.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
