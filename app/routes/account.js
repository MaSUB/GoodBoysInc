var express = require('express');
var router = express.Router();
var db = require("./db.js");

function getReport_callback(req, res, err){
  
  if(err){
    
    console.log("if ");
    res.send("server side error");
  }else if(req.session.report != null){
    
    console.log("else if one ");
    res.send(JSON.stringify(req.session.report));
  }else{
    
    console.log("else ");
    console.log("fucked");
    
    var obj = {
      "success": "no report"
    };
    
    //res.type('json');
    res.send({success : "Updated Successfully"});
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