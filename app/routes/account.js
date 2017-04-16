var express = require('express');
var router = express.Router();
var db = require("./db.js");

router.get('/account', function(req, res) {
  
  res.render('account', {

    pageTitle:'account Page',
    pageID: 'account'
  });
});

/*
Check if uname matches

Then check if pword matches that row

Check type, to determine which account page gets loaded 
-------
Check current user that is logged in?

*/

module.exports = router;