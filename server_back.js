var express = require('express');
var app = express();
const port = 4321;
app.get('/', function (req, res) {
  res.send('I\'m running!');
});

app.listen(port, function () {
  console.log(`ExpressJS is running on port ${port}!`);
}); 