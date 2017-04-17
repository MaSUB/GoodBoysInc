var express = require('express');
var router = express.Router();
var db = require("./db.js");

function loginCallback(req, res, err, returnValue){
    
    if(err){
      console.log("in dis");
      res.redirect('/login');
    }else{
      console.log(returnValue);
      res.redirect('/account');
    }
}

router.get('/login', function(req, res) {
  
  res.render('login', {

    pageTitle:'Login',
    pageID: 'login'
  });
});

router.get('/login/gateway', function(req, res) {
  
  console.log(req.session.uname + " " + req.session.password);
  //check if user is already loged in
  if(!(req.session.uname && req.session.password)){
     
     res.redirect("https://goodboysinc-mws5966.c9users.io/login");
  }else{
    res.redirect("https://goodboysinc-mws5966.c9users.io/account")
  }
});


router.post('/login/confirm', function(req, res) {

  console.log(req.body.uname);
  console.log(req.body.psw);
  db.check_login(loginCallback, req, res, req.body.uname, req.body.psw);
});


/*
Check if uname matches

Then check if pword matches that row

Check type, to determine which account page gets loaded 
-------
Check current user that is logged in?

*/

module.exports = router;