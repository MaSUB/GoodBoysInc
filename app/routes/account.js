var express = require('express');
var router = express.Router();
var db = require("./db.js");

function getReport_callback(req, res, err){
  
  if(err){
    
    res.send("server side error");
  }else if(req.session.report != null){
    
    console.log(req.session.report);
    res.send("sent report path");
  }else{
    
    res.redirect('/twitter');
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

/*
Check if uname matches

Then check if pword matches that row

Check type, to determine which account page gets loaded 
-------
Check current user that is logged in?

*/

module.exports = router;