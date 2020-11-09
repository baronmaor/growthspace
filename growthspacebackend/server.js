const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');
const errors = require('restify-errors');
app.use(bodyParser.json());

let whitelist = ['http://localhost:4200'];

let corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true, credentials: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

app.use('*', cors(corsOptionsDelegate));

app.listen(config.PORT, '127.0.0.1', () => {
  require('./routes/Form')(app, errors);
});
