var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send('GET route');
});

router.post('/',function(req,res){
    res.send('POST route')
});

module.exports = router;
