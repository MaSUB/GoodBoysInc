var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  //var dataFile = req.app.get('appData');
  res.render('index', {

    pageTitle:'Home',
    pageID: 'home'
  });
});

router.get('/information', function(req, res) {
  res.render('information', {

    pageTitle:'Info',
    pageID: 'info'
  });
});

module.exports = router;
