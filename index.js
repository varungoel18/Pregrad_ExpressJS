var express = require('express');
var app = express();
var things = require('./things.js');
var things1 = require('./things1.js');

app.get('/things/:id',function(req,res) {
    res.send('The id you guys specified is ' + req.params.id);
});

// app.post('/hello' , function(req,res) {
//     res.send("You called the post method at '/hello'!\n");
// });
// app.use('/things', things);
// app.use('/things1', things1);

app.listen(8080);