// var express = require('express');
// var app = express();

// app.set('view engine', 'pug'); // Set Pug as the view engine
// app.set('views', './views'); // Set the directory for Pug files

// app.get('/', function (req, res) {
//     // Render the 'index.pug' file in the views folder
//     res.render('index', { title: 'Home Page', message: 'Welcome to Express with Pug!' });
// });

// app.listen(8080, function () {
//     console.log('Server is running on http://localhost:8080');
// });

// form data
// var express = require('express');
// var bodyParser = require('body-parser');
// var multer = require('multer');
// var upload = multer();
// var app = express();

// app.get('/', function(req, res){
//    res.render('form');
// });

// app.set('view engine', 'pug');
// app.set('views', './views');

// // for parsing application/json
// app.use(bodyParser.json()); 

// // for parsing application/xwww-
// app.use(bodyParser.urlencoded({ extended: true })); 
// //form-urlencoded

// // for parsing multipart/form-data
// app.use(upload.array()); 
// // (Hi,Express form)
// // (Varun , Anurag)

// app.post('/', function(req, res){
//    console.log(req.body);
//    res.send("recieved your request!");
// });
// app.listen(3000);

//get , post 

// cookies
// var cookieParser = require('coolie-parser');
// var express = require('express');
// var app = express();
// Cookies:{name:'express'}

// app.get('/' , function(req,res) {
//    // res.cookie('name','express').send('cookie set');
//    res.cookie(name,'value',{expire:360000 + Date.now() }) // giving cookies as expiry time
//    res.clearCookie('foo'); // Deleting cookies

// });

// app.listen(3000);

var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();

app.use(cookieParser());
app.use(session({secret : "Thats a secret"}));

app.get('/',function(req,res) {
   if(req.session.page_views) {
      req.session.page_views++;
      res.send("You have visited this page " + req.session.page_views + "times");
   }
   else {
      req.session.page_views = 1;
      res.send("You visited page first time");
   }
});
app.listen(3000);