var express = require('express');
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.post('/babel', function(req, res, next) {

	var buildPath = path.join(__dirname, '../build');
	if(!fs.existsSync(buildPath)){
		fs.mkdirSync(buildPath);
	} else {
		var info = fs.statSync(buildPath);
		if(!info.isDirectory()){
			fs.unlinkSync(buildPath);
			fs.mkdirSync(buildPath);
		}
	}

	var sourcePath = path.join(__dirname, '../src');
	if(!fs.existsSync(sourcePath)){
		fs.mkdirSync(sourcePath);
	} else {
		var info = fs.statSync(sourcePath);
		if(!info.isDirectory()){
			fs.unlinkSync(sourcePath);
			fs.mkdirSync(sourcePath);
		}
	}

	var config = {
		entry: sourcePath+ '/input',
		output: {
			path: buildPath,
			filename: 'output.js'
		},
		module: {
			loaders: [{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'stage-0']
				},
				include: sourcePath,
				exclude: ['node_modules']
			}]
		}
	};

	var input = req.body.input;
	if(/function\s*\*/.test(input)){
		//input = 'require("babel-polyfill");\n'+ input;
	}

	fs.writeFile(sourcePath+ '/input.js', input, {flag: 'w+'}, function (err) {
		if (err){
			console.error(err);
		} else {
			webpack(config, function(err, stats) {
				if(err){
					//console.error(err);
					res.send({errmsg: err});
				} else if(stats.compilation.errors.length){
					var msgs = [];
					stats.compilation.errors.forEach(function(e, index){
						//console.error(e.message);
						msgs.push(e.message);
					});
					res.send({errmsg: msgs});
				} else {
					fs.readFile(buildPath + '/output.js', { encoding:'utf8', flag:'r' }, function (_err, data) {
						if (_err) {
							//console.error(_err);
							res.send({errmsg: _err});
						} else {
							res.send({content: data});
						}
					});
					//res.sendFile(buildPath + '/output.js');
				}
			});
		}
	});
	
});

router.get('/test', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../views/test.html'));
});

module.exports = router;
