var express = require('express');
var router = express.Router();
var jsonfile = require("jsonfile");
var session = require('client-sessions');
var db = require("./db.js");

router.get('/facebook', function(req, res) {
  res.render('facebookLogin', {
    pageTitle:'FacebookLogin',
    pageID: 'facebook'
  });
  
  db.handle_database(req,res);
});

router.post('/facebook/info', function(req, res){
  
  //console.log(req.body);
  
  /* Write obj to file */
  //var file = './../GoodBoysInc/app/data/facefeed.json';
	var file = '/home/ubuntu/workspace/app/data/faceFeed.json';
  jsonfile.writeFile(file, req.body, function(err){
     if(err){console.error(err);}
    
  });
  
  /* Send to Watson */
  res.redirect('/personality/facebook');
});

module.exports = router;

