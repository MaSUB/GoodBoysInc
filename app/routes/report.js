var express = require('express');
var router = express.Router();
var jsonfile =require('jsonfile');
var db = require("./db.js");

router.get('/report', function(req, res) {
  //var dataFile = req.app.get('appData');
  res.render('report', {

    pageTitle:'Report',
    pageID: 'report'
  });
});

router.post('/report/twitter', function(req, res) {

    /* Read from file */
    //var file = './../GoodBoysInc/app/data/twitFeed.json';
    var file = '/home/ubuntu/workspace/app/data/twitFeed.json';
    jsonfile.readFile(file, function(err, obj) {
         if(err)
            res.send(err);
         else
            res.send(obj);
    });
});

router.post('/report/facebook', function(req, res) {

    /* Read from file */
    //var file = './../GoodBoysInc/app/data/twitFeed.json';
    var file = '/home/ubuntu/workspace/app/data/faceFeed.json';
    jsonfile.readFile(file, function(err, obj) {
        
         if(err)
            res.send(err);
         else
            res.send(obj);
    });
});

router.post('/report/information', function(req, res) {

   /* Read from file */
    //var file = './../GoodBoysInc/app/data/twitFeed.json';
    var file = '/home/ubuntu/workspace/app/data/aboutFeed.json';
    jsonfile.readFile(file, function(err, obj) {
        
       if(err)
            res.send(err);
       else
            res.send(obj);
    }); 
});

module.exports = router;
