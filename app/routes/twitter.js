var express = require('express');
var router = express.Router();
var OAuth = require('oauth').OAuth
  , oauth = new OAuth(
      "https://api.twitter.com/oauth/request_token",
      "https://api.twitter.com/oauth/access_token",
      "FvXUtpAcjxQbA7Pljd7BnR4nU",
      "hpnmzytHudEjtX5LSyWRAY6uqcwuUe06PZSLSeryt8NhTPrR3K",
      "1.0",
      "http://localhost:3000/auth/twitter/callback",
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
            req.session.oauth.access_token = oauth_access_token;
            req.session.oauth.access_token_secret = oauth_access_token_secret;
            console.log(results, req.session.oauth);
            res.send("Authentication Successful");
            // res.redirect('/'); // You might actually want to redirect!
          }
        }
      );
    }
    else {
      res.redirect('/login'); // Redirect to login page
    }

  });
  //res.render('twitter', {

    //pageTitle:'Twitter',
    //pageID: 'twitter'
//  });;
});

module.exports = router;
