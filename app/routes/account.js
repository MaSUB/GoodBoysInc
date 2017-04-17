var express = require('express');
var router = express.Router();
var db = require("./db.js");

function getReport_callback(req, res, err){
  
  if(err){
    
    res.send("server side error");
  }else if(req.session.report != null){
    
    res.send(JSON.stringify(req.session.report));
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


module.exports = router;