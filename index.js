var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();

app.set('port',process.env.PORT || 8000);
app.set('views', __dirname + '/views');
app.set('view engine','jade');

app.use(express.static(__dirname + '/public/htmlfiles'));
app.use('/', express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get ('/', function (req,res) {
    res.render('index');
});

require('./server/RoutesAndDB.js')(app);
require('./server/RoutesAndDBForEmp.js')(app);


var server = http.createServer(app).listen(app.get('port'),function(){
    console.log('Server listening on port ' + app.get('port'));
});