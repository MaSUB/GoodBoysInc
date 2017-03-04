var express = require('express');
var router = express.Router();
var Twitter = require("node-twitter-api"),
  secret = include("secret");
  
router.get('/twitter', function(req, res) {
  res.render('twitter', {

    pageTitle:'Twitter',
    pageID: 'twitter'
  });;
});

module.exports = router;
