var express = require('express');
var router = express.Router();
var db = require("./db.js");

function loginCallback(req, res, err, returnValue){
    
    if(err == "No match in DB"){
      
      //send to signUp to make new report if no match
      console.log("Making new report");
      res.redirect('/signup');
    }else if(err){
      
      // have them try again if its anyother error
      res.redirect('/login');
    }else if(req.session.type == "A"){
     
       // if Admin send to admin page
       res.redirect('/admin')
      
    }else{
      
      // Load account page if found in DB
      console.log(returnValue);
      res.redirect('/account');
    }
}

router.get('/login', function(req, res) {
  
  console.log("logged in " + req.session.loggedin);
  if(req.session.loggedin == 1){
    
   res.redirect('/account');
  }else{
    
     res.render('login', {
  
      pageTitle:'Login',
      pageID: 'login'
    });
  }
});

router.get('/signup', function(req, res) {
  
  console.log("logged in " + req.session.loggedin);
  if(req.session.loggedin == 1){
    
   res.redirect('/account');
  }else{
    
     res.render('signUp', {
  
      pageTitle:'signUp',
      pageID: 'signUp'
    });
  }
});

router.post('/signup/first', function(req, res) {
  
  console.log("logged in " + req.session.loggedin);
  if(req.session.loggedin == 1){
    
   res.redirect('/account');
  }else{
    
    // set session variables then pass to twitter
    req.session.uname = req.body.uname;
    req.session.password = req.body.psw;
    res.redirect('/twitter');
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