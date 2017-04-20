var express = require('express');
var router = express.Router();
var jsonfile = require("jsonfile");
var db = require("./db.js");

function getReport_callback(req, res, err){
  
  if(err){
    
    res.send("server side error");
  }else if(req.session.report != null){
    
   var reportBody = require("./../userData/" + req.session.report);
   res.send(JSON.stringify(reportBody));
    
  }else{
    
    var obj = {
      "error": "no report"
    };
    res.send(obj);
  }
}

function setReport_callback(req, res, err){
  
  if(err){
    
    res.send("server side error");
  }else if(req.body != null){
    
    /* Write obj to file */
    //var file = './../GoodBoysInc/app/data/facefeed.json';
  	var file = '/home/ubuntu/workspace/app/data/faceFeed.json';
    jsonfile.writeFile(file, req.body, function(err){
       if(err){
         console.error(err);
       }
    });
    
    // do something with this 
    res.send("got it");
    
  }else{
    
    var obj = {
      "error": "no report"
    };
    res.send(obj);
  }
}

router.get('/account', function(req, res) {
  
  if(req.session.loggedin == 1){
    res.render('account', {

      pageTitle:'account Page',
      pageID: 'account'
    });
  }else{
    res.redirect('/login');
  }
});

router.post('/account/getReport', function(req, res) {

 db.get_report(req, res, getReport_callback);
});

router.post('/account/setReport', function(req, res) {

 //console.log(req.session.uname + " " + req.session.password);  
 db.set_report(req, res, setReport_callback);
});

module.exports = router;