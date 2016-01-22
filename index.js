var express = require('express');
var session = require('express-session');
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.set('port',process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','jade');

app.use(express.static(__dirname + '/public/htmlfiles'));
app.use('/', express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// to clear back history
// app.use(function(req, res, next) { res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0'); next(); });

app.use(session({
    secret: 'sessionmanagement',
    resave: true,
    saveUninitialized: true
}));



var server = http.createServer(app).listen(app.get('port'),'0.0.0.0',function(){
    console.log('Server listening on port ' + app.get('port'));
});

require('./server/RoutesAndDB.js')(app);
require('./server/RoutesAndDBForEmp.js')(app);
require('./server/RoutesAndDBForJobs.js')(app);
var a = require('./server/DBForAppliedJobs.js')(app);


// Routes

// redirect the user for ViewJobs
app.get ('/ViewJobs', function (req,res) {
    res.redirect('fetchAllData');
});

app.get('/viewResume',function(req,res){
    res.redirect('viewProfile');
});

app.get('/viewEmployerProfile',function(req,res){
    res.redirect('viewProfileOfEmployer');
});

app.get('/homeMenuSeeker', function(req,res){

});

app.get('/',function(req,res){
    if(req.session.email)
    {
        console.log("user already Loged in");
    }
    else{
        getAllJobs(jobsCallback,req,res);
        //res.sendFile('index.html');
    }
});

var jobsCallback = function(data,req,res) {
    console.log(data);
    res.render('index.jade',{data:data});
};


app.get('/updateSeekerData', function (req,res) {
    res.redirect('viewProfileForUpdation');
});


app.get('/OpenAddjobs', function (req,res) {
    res.render('Addjobs');
});

app.get('/showJobs',function(req,res){
    res.redirect('fetchDataAddedByEmployer');
});



app.get('/ViewAppliedJobs',function(req,res){
    getAppliedDataOfSeeker(req.session.email,idcallback,req,res);
});

var idcallback = function(data,req,res) {
    getJobData(data,req,res);
};


app.get('/showIndividualSeeker/:id', function (req,res) {
    getAppliedDataOfEmployer(req.params.id,employercallback,req,res);
});

var employercallback = function(data,req,res) {
    getAppliedSeekersData(data,req,res);
};

//app.post('/updateSeekerData',function(req,res){
//    res.redirect('/updatejobSeekerData');
//});


app.get('/fetchAppliedJobs', function (req,res) {
});

app.get('/logout',function(req,res) {

    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/');
        }
    });
});

//app.post('/saveApplyDataInDB', function (req,res) {
//    // mapping of both Collections and add data to DB
//
//    app.locals.job_id = req.body.jobid;
//    app.locals.job_seeker_id = req.body.employerData;
//    res.redirect('appliedJobs');
//});