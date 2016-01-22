var express = require('express');
var path = require('path');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
	res.send('');
});

router.get('/jquery.min.js', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../node_modules/jquery/dist/jquery.min.js'));
});

router.get('/jquery.min.map', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../node_modules/jquery/dist/jquery.min.map'));
});


module.exports = router;
