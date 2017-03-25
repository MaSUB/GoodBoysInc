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

  /* create object */
  // var faceObj = {
  //   content_Items:[]
  // };
  // req.body.forEach(function(value){
  //   faceObj.content_Items.push({content: value.text});
  // });

  /* Write obj to file */
  var file = './../GoodBoysInc/app/data/facefeed.json';
  jsonfile.writeFile(file, req.body, function(err){
     console.error(err);
  });

  //res.send(req.body);

  /* Send to Watson */
  res.redirect('/personality/facebook');
});

module.exports = router;
