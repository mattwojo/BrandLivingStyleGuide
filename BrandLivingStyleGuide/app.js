var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



app.get('/', function(req,res) {
    res.render('index.jade', {title: 'index'});
});

app.get('/formElements', function(req,res) {
    res.render('formElements.jade', {title: 'formElements'});
});

app.get('/grid', function(req,res) {
    res.render('grid.jade', {title: 'grid'});
});

app.get('/colorpalette', function(req,res) {
    res.render('colorpalette.jade', {title: 'colorpalette'});
});

app.get('/lists', function(req,res) {
    res.render('lists.jade', {title: 'lists'});
});

app.get('/tables', function(req,res) {
    res.render('tables.jade', {title: 'tables'});
});

app.get('/barcharts', function(req,res) {
    res.render('barcharts.jade', {title: 'barcharts'});
});

app.get('/navigation', function(req,res) {
    res.render('navigation.jade', {title: 'navigation'});
});

app.get('/form', function(req,res) {
    res.render('form.jade', {title: 'form'});
});

app.get('/type', function(req,res) {
    res.render('type.jade', {title: 'type'});
});


app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}



// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});



module.exports = app;
