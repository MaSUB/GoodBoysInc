var express = require('express');
var router = express.Router();
var Twit = require('twit');
var jsonfile =require('jsonfile');
var OAuth = require('oauth').OAuth
  , oauth = new OAuth(
      "https://api.twitter.com/oauth/request_token",
      "https://api.twitter.com/oauth/access_token",
      "FvXUtpAcjxQbA7Pljd7BnR4nU",
      "hpnmzytHudEjtX5LSyWRAY6uqcwuUe06PZSLSeryt8NhTPrR3K",
      "1.0",
      //"http://localhost:3000/auth/twitter/callback",
      "https://goodboysinc-mws5966.c9users.io/auth/twitter/callback",
      "HMAC-SHA1"
    );


router.get('/twitter', function(req, res) {

  oauth.getOAuthRequestToken(function(error, oauth_token, oauth_token_secret, results) {
    if (error) {
      console.log(error);
      res.send("Authentication Failed!");
    }
    else {

      console.log("it worked kind  " + oauth_token);
      req.session.oauth = {
        token: oauth_token,
        token_secret: oauth_token_secret
      };
      console.log(req.session.oauth);
      res.redirect('https://twitter.com/oauth/authenticate?oauth_token='+oauth_token)
    }
  });

  router.get('/auth/twitter/callback', function(req, res, next) {

    if (req.session.oauth) {
      req.session.oauth.verifier = req.query.oauth_verifier;
      var oauth_data = req.session.oauth;

      oauth.getOAuthAccessToken(
        oauth_data.token,
        oauth_data.token_secret,
        oauth_data.verifier,
        function(error, oauth_access_token, oauth_access_token_secret, results) {
          if (error) {
            console.log(error);
            res.send("Authentication Failure!");
          }
          else {
            req.session.oauth.access_token_secret = oauth_access_token_secret;
            req.session.oauth.access_token = oauth_access_token;
            console.log(results, req.session.oauth);
            res.redirect('/auth/twitter/info');
          }
        });
    }
    else {
      res.redirect('/login'); // Redirect to login page
    }

  });
});

router.get('/auth/twitter/info',function(req,res,next){

  var client = new Twit ({

    consumer_key:'FvXUtpAcjxQbA7Pljd7BnR4nU',
    consumer_secret:'hpnmzytHudEjtX5LSyWRAY6uqcwuUe06PZSLSeryt8NhTPrR3K',
    access_token: req.session.oauth.access_token,
    access_token_secret: req.session.oauth.access_token_secret,
    timeout_ms: 60*1000
  });

  client.get('statuses/user_timeline', {screen_name: 'Michael Stumpf', count: 100},
  function(err,data,response){
    if(err){
      console.log("no");
    }
    else{

      /* create object */
      var twitObj = {
        content_Items:[]
      };
      data.forEach(function(value){
        twitObj.content_Items.push({content: value.text});
      });

      /* write out to file */
      //var file = './../GoodBoysInc/app/data/twitFeed.json';
      var file = '/home/ubuntu/workspace/app/data/twitFeed.json';
      jsonfile.writeFile(file, twitObj, function(err){
        if(err){console.error(err);}
      });

      /* Send to Watson */
      res.redirect('/personality/twitter');
    }
  });
})

module.exports = router;
