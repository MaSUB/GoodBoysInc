var express = require('express');
var router = express.Router();
var jsonfile = require("jsonfile");
var session = require('client-sessions');

router.get('/facebook', function(req, res) {
  res.render('facebook', {
    pageTitle:'Facebook',
    pageID: 'facebook'
  });
});

router.post('/facebook/info', function(req, res){
	var obj = {asdf : "asdf"};
  var file = './../GoodBoysInc/app/data/facefeed.json';
      jsonfile.writeFile(file, obj, function(err){
        console.error(err);
      });
	//console.log('body: ' + JSON.stringify(req.body));
	res.send(req.body);
});

module.exports = router;
