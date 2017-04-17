var express = require('express');
var router = express.Router();
var jsonfile =require('jsonfile');
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var personality_insights = new PersonalityInsightsV3({
  username: '1342de23-5b27-4760-87c7-a61e3f805f99',
  password: 'jFV2CncFVKf3',
  version_date: '2016-10-20'
});
var db = require("./db.js");

router.get('/personality/twitter', function(req, res, next){

  var params = {

    // Get the content items from the JSON file.
    content_items: require('./../data/twitFeed.json').content_Items,
    consumption_preferences: true,
    raw_scores: true,
    headers: {
      'accept-language': 'en',
      'accept': 'application/json'
    }
  };

  personality_insights.profile(params, function(error, response) {
    if (error)
      console.log('Error:', error);
    else{
      //console.log(JSON.stringify(response, null, 2));
      
      /* write out to file */
      //var file = './../GoodBoysInc/app/data/twitFeed.json';
      var file = '/home/ubuntu/workspace/app/data/twitFeed.json';
      jsonfile.writeFile(file, response, function(err){
        if(err){console.error(err);}
      });
      
      console.log("twitFeed sent");
      res.redirect('/facebook');
    }
  });
});

router.get('/personality/facebook', function(req, res, next){

  var params = {

    // Get the content items from the JSON file.
    content_items: require('./../data/faceFeed.json').content_Items,
    consumption_preferences: true,
    raw_scores: true,
    headers: {
      'accept-language': 'en',
      'accept': 'application/json'
    }
  };

  personality_insights.profile(params, function(error, response) {
    if (error)
      console.log('Error:', error);
    else{
      //console.log("Here" + JSON.stringify(response, null, 2));
      
      /* write out to file */
      //var file = './../GoodBoysInc/app/data/faceFeed.json';
      var file = '/home/ubuntu/workspace/app/data/faceFeed.json';
      jsonfile.writeFile(file, response, function(err){
        if(err){console.error(err);}
      });
      
      console.log("faceFeed sent");
      //no need to redirect here the jQuery client side messes with the response.
    }
  });
});

router.get('/personality/about', function(req, res, next){

  var params = {

    // Get the content items from the JSON file.
    content_items: require('./../data/aboutFeed.json').content_Items,
    consumption_preferences: true,
    raw_scores: true,
    headers: {
      'accept-language': 'en',
      'accept': 'application/json'
    }
  };

  personality_insights.profile(params, function(error, response) {
    if (error)
      console.log('Error:', error);
    else{
      //console.log(JSON.stringify(response, null, 2));
      
      /* write out to file */
      //var file = './../GoodBoysInc/app/data/aboutFeed.json';
      var file = '/home/ubuntu/workspace/app/data/aboutFeed.json';
      jsonfile.writeFile(file, response, function(err){
        if(err){console.error(err);}
      });
      
      console.log("about sent");
    }
    res.send("done");
  });
});

module.exports = router;
