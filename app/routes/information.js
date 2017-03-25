var express = require('express');
var router = express.Router();
var jsonfile = require("jsonfile");
var session = require('client-sessions');

router.get('/information', function(req, res) {
  res.render('information', {
    pageTitle:'information',
    pageID: 'information'
  });
});

router.post('/information/info', function(req, res){
	var obj = {asdf : "asdf"};
  var file = './../GoodBoysInc/app/data/facefeed.json';

  /* Write obj to file */
  jsonfile.writeFile(file, obj, function(err){
     console.error(err);
  });

  /* Send to Watson */
  res.redirect('/personality/information');

	//res.send(req.body);
});

module.exports = router;
