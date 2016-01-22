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



    // Method to fetch all the jobs applied by Individual Seeker
    app.get('/fetchAppliedJobsBySeeker', function(req,res){

    });


    getAppliedDataOfSeeker = function(data,callback,req,res){

        user.find({"job_seeker_details":data}, function(err,docs){
            if(err){
                console.log("login error" + err);
                res.json(err);
            }
            else{
                if (docs.length > 0) {

                    var tempArr = [];

                    var i=0;
                    for(var d in docs) {
                        tempArr[i] = docs[i].jobid.toString();
                        i++;
                    }

                    callback(tempArr,req,res);
                }
                else {
                    // No data found
                    console.log("No Jobs Data Found " + err)
                    res.json(err);
                }
            }
        });
    }


    getAppliedDataOfEmployer = function(data,callback,req,res){

        user.find({"jobid":data}, function(err,docs){
            if(err){
                console.log("login error" + err);
                res.json(err);
            }
            else{
                if (docs.length > 0) {

                    var tempArr = [];

                    var i=0;
                    for(var d in docs) {
                        tempArr[i] = docs[i].job_seeker_details;
                        i++;
                    }

                    callback(tempArr,req,res);
                }
                else {
                    // No data found
                    console.log("No Jobs Data Found " + err)
                    res.json(err);
                }
            }
        });
    }

};