var express = require('express');
var reload =require('reload');
var app = express();

var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var personality_insights = new PersonalityInsightsV3({
  username: '1342de23-5b27-4760-87c7-a61e3f805f99',
  password: 'jFV2CncFVKf3',
  version_date: '2016-10-20'
});

var params = {
  // Get the content items from the JSON file.
  content_items: require('./data/profile.json').contentItems,
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
  else

    var anger = response.personality[0].name;
    //console.log(JSON.stringify(response, null, 2));
    console.log(anger);
  }
);



app.get('/', function(req, res) {
  res.send('<h1>Roux Academy Meetups</h1>
            <h2></h2>');
});

var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});

reload(server, app);
