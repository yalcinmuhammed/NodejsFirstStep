var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var logger = require("winston");
var SystemError = require("./errors/system.error");
var middleware = require('./helpers/middleware');
var expressValidator = require("express-validator");
// Mongodb Connection
require('./connections/mongo.connections');

var CarRoute = require('./routes/car.route');
var BrandRoute = require('./routes/brand.route');

var app = express();
app.use(middleware.CORS);
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
app.use(expressValidator());
app.use(expressValidator({
    customValidators: {
        isArray: function(value){
            return Array.isArray(value);
        },
        isLocationObject: function(value){
            if((!!value) && (value.constructor === Object)){
               if(value.hasOwnProperty("latitude") && value.hasOwnProperty("longitude")){
                   return true;
               }else{
                   return false;
               }
            }else{
                return false;
            }
        }
    }
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/cars', CarRoute);
app.use('/brands', BrandRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new SystemError.ServiceNotFound();
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  if (!err.status || err.status == 500) {
    logger.error("APIException: " + err.message || err.msg);
    err = new SystemError.APIException();
  }

  res.status(err.status || 500);

  res.json({
      message: err.message,
      statusCode: err.status,
      errorCode: err.error_code || err.code
  });
});

module.exports = app;
