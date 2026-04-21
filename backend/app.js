var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var employeeRouter = require('./routes/Employee-routes');

var app = express();




//mongoose connction
const mongoose = require('mongoose');

const mongoDBUri = 'mongodb+srv://AbrarFArooq:allahmuhammad@cluster0.knvgmkv.mongodb.net/TMS-Database';  // Replace with your URI

async function main() {
  await mongoose.connect(mongoDBUri);
  console.log('Connected to MongoDB!');
}

main().catch(err => console.error(err));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', employeeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
