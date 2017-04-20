var express = require('express');
var reload = require('reload');
var app = express();
var bodyParser = require('body-parser');
var clientsessions = require('client-sessions');
var randomstring = require("randomstring");



app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Good Boys Inc';

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
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
app.use(require('./routes/facebook'));
app.use(require('./routes/information'));
app.use(require('./routes/report'));
app.use(require('./routes/login'));
app.use(require('./routes/account'));
app.use(require('./routes/admin'));



var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);
