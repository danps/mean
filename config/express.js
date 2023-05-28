// config/express.js
const express = require('express');
const home = require('../app/routes/home');
const router = express.Router();
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static('./public'));

//app.set('view engine', 'ejs');
//app.set('views','./app/views');
//app.use ('/', home);

module.exports = app;

