var express = require('express');
var reload = require('reload');
var app = express();
var bodyParser = require('body-parser');

//var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
//app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Good Boys Inc';

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/personality'));
app.use(require('./routes/twitter'));
app.use(require('./routes/facebook'));


var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);
