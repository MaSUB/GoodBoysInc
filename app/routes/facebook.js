var express = require('express');
var router = express.Router();
var jsonfile = require("jsonfile");
var session = require('client-sessions');

router.get('/facebook', function(req, res) {
  res.render('facebookLogin', {
    pageTitle:'FacebookLogin',
    pageID: 'facebook'
  });
});

router.post('/facebook/info', function(req, res){
  //console.log(req.body);
  /* Write obj to file */
  var file = './../GoodBoysInc/app/data/facefeed.json';
  jsonfile.writeFile(file, req.body, function(err){

     if(err){console.error(err);}
     console.log('here');
  });
  /* Send to Watson */
  res.redirect('/personality/facebook');
});

module.exports = router;
