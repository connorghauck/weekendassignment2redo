var express = require('express');
var app = express();
var path = require('path');
var data = require('./public/data/rho');

//routes
app.get('/data', function (req, res) {
    console.log('Received request::', req.method, req.path);
    res.send(data);
    res.sendFile(path.join(__dirname, './public/data/rho.json'));
  });

//catch all static files
app.get('/*', function (req, res) {
    console.log('Received request::', req.method, req.path);
    var file = req.params[0] || 'views/index.html';
    res.sendFile(path.join(__dirname, '/public/', file));
  });


//start server on any port
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
    console.log('Server up and running on port', app.get('port'));
  });
