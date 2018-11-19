var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect('mongodb://angulardyma:angulardyma123@ds039311.mlab.com:39311/angulardyma', { useNewUrlParser: true }, error => {
  if (error) {
    console.log(error);
  } else {
    console.log('db connection ok!');
  }
});

app.get('*', (req, res) => {
  res.sendfile(path.join(__dirname, '../public/index.html'))
});

module.exports = app;
