var express = require('express');
var router = express.Router();
var session = require('client-sessions');

router.get('/facebook', function(req, res) {
  res.render('facebook', {
    pageTitle:'Facebook',
    pageID: 'facebook'
  });
});
module.exports = router;
