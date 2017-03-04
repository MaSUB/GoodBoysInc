var express = require('express');
var router = express.Router();

router.get('/index', function(req, res) {
  //var dataFile = req.app.get('appData');
  res.render('index', {

    pageTitle:'Home',
    pageID: 'home'
  });
});

module.exports = router;
