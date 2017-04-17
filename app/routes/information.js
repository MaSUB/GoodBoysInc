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
    content_Items: [],
    about:[]
  };
  
  aboutObj.content_Items.push({content: req.body.aboutYou});
  aboutObj.about.push({firstName: req.body.fname});
  aboutObj.about.push({lastName: req.body.lname});
  aboutObj.about.push({email: req.body.email});
  aboutObj.about.push({phoneNumber: req.body.pNumber});
  aboutObj.about.push({facebook: req.body.facebookLink});
  aboutObj.about.push({twitter: req.body.twitterLink});
  aboutObj.about.push({address1: req.body.address1});
  aboutObj.about.push({address2: req.body.address2});
  
  /* Write obj to file */
  //var file = './../GoodBoysInc/app/data/aboutFeed.json';
  var file = '/home/ubuntu/workspace/app/data/aboutFeed.json';
  jsonfile.writeFile(file, aboutObj, function(err){
     if(err){
      console.error(err);
     }
  });
  console.log(JSON.stringify(aboutObj));
  

  /* Send to Watson */
  res.redirect('/personality/about');

});

module.exports = router;
