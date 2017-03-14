var express = require('express');
var reload = require('reload');
var app = express();
var clientsessions = require('client-sessions');
var randomstring = require("randomstring");
//var session = require('./routes/session');
//var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
//app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Good Boys Inc';

app.use(clientsessions({
  cookieName: 'session',
  secret: randomstring.generate(),
  duration: 30 * 60 * 1000,
  activeDuratoin: 5 * 60 * 1000,
}));
app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/personality'));
app.use(require('./routes/twitter'));


var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);
