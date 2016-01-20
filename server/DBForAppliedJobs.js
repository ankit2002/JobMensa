/**
 * Created by ANKIT on 19/01/16.
 */
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');


module.exports = function(app) {

    var Schema = new mongoose.Schema({

        jobid: String,
        job_seeker_details: String
    });

    var user = mongoose.model('AppliedJobs', Schema);

    app.post('/saveDataInDB',function(req,res){

        var a = new user({

        //    app.locals.job_id = req.body.jobid;
        //app.locals.job_seeker_id = req.body.employerData;

            jobid: req.body.jobid,
            job_seeker_details : req.body.employerData
        });

        a.save(function(err,doc){
            if(err){
                console.log("error in Emp");
                res.json(err);
            }
            else{
                res.send('Applied Successfully');
            }
        });
    });

};