/**
 * Created by ANKIT on 16/01/16.
 */
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

module.exports = function(app) {

    var Schema = new mongoose.Schema({

        job_position_title: String,
        job_field: String,
        job_description: String,
        job_role_responsibility: String,
        job_city: String,
        job_state: String,
        country: String,
        job_mobile_no: Number,
        job_added_by:String
    });

    var user = mongoose.model('addjobs', Schema);

    app.post('/savejobs',function(req,res){

        var a = new user({
            job_position_title: req.body.job_position_title,
            job_field : req.body.job_field,
            job_description : req.body.job_description,
            job_role_responsibility : req.body.job_role_responsibility,
            job_city : req.body.job_city,
            job_state : req.body.job_state,
            country : req.body.country,
            job_mobile_no : req.body.job_mobile_no,
            job_added_by : req.session.email
        });

        a.save(function(err,doc){
            if(err){
                console.log("error in Jobs" + err);
                res.json(err);
            }
            else{
                // Popup the user that user saved succefully
                res.redirect('/Empmenuview');
            }
        });
    });

    app.get('/Empmenuview',function(req,res){
        // Show Popup Data Added Successfully
        res.send('Added Successfully');
    });


    // Method to fetch all the data from the main activities
    app.get('/fetchAllData', function(req,res){

        user.find({}, function(err,docs){
            if(err){
                console.log("login error" + err);
                res.json(err);
            }
            else{
                if (docs.length > 0) {
                    res.render('ViewJobsForSeeker',{users: docs, name:req.session.name});
                }
                else {
                    // No data found
                    console.log("No Jobs Data Found " + err)
                    res.json(err);
                }
            }
        });
    });

    // Method to fetch all the data from the main activities
    app.get('/fetchDataAddedByEmployer', function(req,res){

        user.find({"job_added_by":req.session.email}, function(err,docs){
            if(err){
                console.log("login error" + err);
                res.json(err);
            }
            else{
                if (docs.length > 0) {
                    res.render('ViewJobsForEmployer',{users: docs});
                }
                else {
                    // No data found
                    console.log("No Jobs Data Found " + err)
                    res.json(err);
                }
            }
        });
    });

    getAllJobs = function (callback,req,res) {
        user.find({}, function(err,docs){
            if(err){
                console.log("data Error" + err);
                res.json(err);
            }
            else{
                //if (docs.length > 0) {
                //    callback(docs,req,res);
                //}
                //else {
                //    // No data found
                //    console.log("No Jobs Data Found " + err)
                //    res.json(err);
                //}

                callback(docs,req,res);
            }
        });
    }


    getJobData = function(data,req,res){

        var temparr = [];

        for (var i=0;i<data.length;i++){
            temparr[i] = data[i] ;
        }

        //console.log("ankit Data " + temparr.length );
        //
        //user.find({"_id":{ $in :[temparr[0],temparr[1]]}}, function(err,docs){
        //    if(err){
        //        console.log("login error" + err);
        //        res.json(err);
        //    }
        //    else{
        //        if (docs.length > 0) {
        //            console.log("ankit jobdatafile docs" +  docs);
        //            res.render('ViewAppliedJobs',{users: docs, name:req.session.name});
        //        }
        //        else {
        //            // No data found
        //            console.log("No Jobs Data Found " + err)
        //            res.json(err);
        //        }
        //    }
        //});


        var dataArr= [];
        /// Some Testing
        function asyncLoop( i, callback ) {
            if( i < temparr.length ) {

                user.find({"_id":temparr[i]}, function(err,docs){
                    if(err){
                        console.log("login error" + err);
                        res.json(err);
                    }
                    else{
                        if (docs.length > 0) {
                            dataArr[i] = docs;
                        }
                        else {
                            // No data found
                            console.log("No Jobs Data Found " + err)
                            res.json(err);
                        }
                    }
                    asyncLoop( i+1, callback );
                });
            } else {
                callback();
            }
        }
        asyncLoop( 0, function() {
            // put the code that should happen after the loop here
            res.render('ViewAppliedJobs',{users: dataArr, name:req.session.name});
        });

    }

};