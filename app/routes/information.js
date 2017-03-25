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
  var aboutObj = {
    content_Items: []
  };
  aboutObj. content_Items.push({content: req.body.aboutYou});

  var file = './../GoodBoysInc/app/data/aboutFeed.json';
  /* Write obj to file */
  jsonfile.writeFile(file, aboutObj, function(err){
     console.error(err);
  });
  console.log("First Name " + req.body.fname);
  console.log("Last Name " + req.body.lname);
  console.log("Email " + req.body.email);
  console.log("About" + req.body.aboutYou);

  /* Send to Watson */
  res.redirect('/personality/about');

});

module.exports = router;
