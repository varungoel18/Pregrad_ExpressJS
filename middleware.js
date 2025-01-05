var express = require('express');
var app = express();

app.use(function(req,res,next) {
    console.log("Start");
    
    next();
});

app.get('/', function(req,res,next) {
    res.send("Intermediate");
    
});

app.get('/', function(req,res,next) {
    console.log("End");
});




app.listen(8080);