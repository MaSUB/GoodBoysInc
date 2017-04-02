var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  //var dataFile = req.app.get('appData');
  res.render('index', {

    pageTitle:'Home',
    pageID: 'home'
  });
});


router.get('/report', function(req, res) {
  res.render('report', {

    pageTitle:'Report',
    pageID: 'report'
  });
});

module.exports = router;
