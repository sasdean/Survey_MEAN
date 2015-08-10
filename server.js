var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8888, function() {
  console.log('connected');
});