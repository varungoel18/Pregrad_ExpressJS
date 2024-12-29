var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send('GET route on 1');
});

router.post('/',function(req,res){
    res.send('POST route on 2');
});

module.exports = router;
