/**
 * Created by ANKIT on 12/01/16.
 */
var mongoose = require('mongoose');
var fs = require('fs');
var multer = require('multer');
var path = require('path');



module.exports = function(app) {

    var Schema = new mongoose.Schema({

        _id: String,
        name: String,
        father_name: String,
        mother_name: String,
        dob: String,
        gender: String,
        marital_status: String,
        nationality: String,
        religion: String,
        current_addr: String,
        permanent_addr: String,
        home_phone: Number,
        mobile_phone: Number,
        office_phone: Number,
        edu_level: String,
        edu_start_year: Number,
        edu_end_year: Number,
        edu_institute_name: String,
        edu_addr: String,
        emp_post: String,
        emp_company_name: String,
        emp_company_addr: String,
        emp_company_webaddr: String,
        emp_responsibiility: String,
        img: {data: Buffer},
        language_spoken: String,
        skills: String
    });

    var user = mongoose.model('jobseeker', Schema); // object used to access named collection

// Method to decode
    function base64_decode(base64str, file) {
        // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
        var bitmap = new Buffer(base64str, 'base64');
        // write buffer to file
        fs.writeFileSync(file, bitmap);
        console.log('******** File created from base64 encoded string ********');
    }

    app.get('/view', function (req, res) {

        res.sendFile('JobSeekerLogin.html',{ root: path.join(__dirname, '../public/htmlfiles')});

        // Earlier used for redirection
        //user.find({"_id": userID}, function (err, docs) {
        //    if (err) {
        //        console.log("ankit error" + err)
        //        res.json(err);
        //    }
        //    else {
        //        //res.render('login.html'); // for earlier jade
        //        res.sendFile('index.html',{ root: path.join(__dirname, '../public/htmlfiles')});
        //    }
        //});
    })


    var upload = multer({
        dest: 'uploads/',
        limits: {fileSize: 5000000, files: 1}
    })


    //var userID = "";
    //var userName = "";
    app.post('/jobseeker_registration', upload.single('profile_pic_name'), function (req, res) {

        var a = new user({
            _id: req.body.job_seeker_id,
            name: req.body.job_seeker_name,
            father_name: req.body.job_seeker_father_name,
            mother_name: req.body.job_seeker_mother_name,
            dob: req.body.daydropdown + req.body.monthdropdown + req.body.yeardropdown,
            gender: req.body.job_seeker_gender,
            marital_status: req.body.job_seeker_marital_status,
            nationality: req.body.job_seeker_nationality,
            religion: req.body.job_seeker_religion,
            current_addr: req.body.job_seeker_current_address,
            permanent_addr: req.body.job_seeker_permanent_address,
            home_phone: req.body.job_seeker_homephone,
            mobile_phone: req.body.job_seeker_mobile,
            office_phone: req.body.job_seeker_officephone,
            edu_level: req.body.job_seeker_edu_level,
            edu_start_year: req.body.job_seeker_edu_start_year,
            edu_end_year: req.body.job_seeker_edu_end_year,
            edu_institute_name: req.body.job_seeker_edu_institute_name,
            edu_addr: req.body.job_seeker_edu_institute_address,
            emp_post: req.body.job_seeker_designation,
            emp_company_name: req.body.job_seeker_comp_name,
            emp_company_addr: req.body.job_seeker_comp_address,
            emp_company_webaddr: req.body.job_seeker_comp_web_address,
            emp_responsibiility: req.body.job_responsibility,
            language_spoken: req.body.job_seeker_languages,
            skills: req.body.job_seeker_skill
        });

        if (req.file)
            a.img.data = fs.readFileSync(req.file.path);
        else
            a.img.data = fs.readFileSync("./public/images/default-user-profile-image.png");

        a.save(function (err, doc) {
            if (err) {
                res.json(err);
            } else {
                //userID = req.body.job_seeker_id;
                //userName = req.body.job_seeker_name;
                res.redirect('/view');
            }
        });
    });


    app.post('/loginValidation', function (req, res) {
        // check the user in db
        user.find({"_id": req.body.username, "name": req.body.password}, function (err, docs) {
            if (err) {
                console.log("login error" + err);
                res.json(err);
            }
            else {

                if (docs.length == 1) {
                    //  converting bytes into Image
                    //var returnable_name = docs[0].img.data;
                    //base64_decode(docs[0].img.data, './uploads/img.png');
                    req.session.email = req.body.username;
                    req.session.name = docs[0].name;

                    var thumb = new Buffer(docs[0].img.data).toString('base64');
                    res.render('jobseekerhome.jade', {users: docs, image: thumb});
                }
                else {
                    // No data found
                    console.log("No Data Found" + err)
                    res.json(err);
                }
            }
        });
    });


    // Method to fetch Data For Job Apply
    app.get('/applyJobsPage/:id', function (req,res) {

        user.find({"_id":req.session.email}, function (err,docs) {

            if(err){
                console.log("Error on Apply JObs DB");
                res.json(err);
            }
            else{
                var jobid = req.params.id;
                res.render('ApplyJobsPage',{data:docs , jobid:jobid});
            }
        });
    });



    app.get('/viewProfile', function (req, res) {
        // check the user in db
        user.find({"_id": req.session.email}, function (err, docs) {
            if (err) {
                res.json(err);
            }
            else {

                if (docs.length == 1) {
                    var thumb = new Buffer(docs[0].img.data).toString('base64');
                    res.render('jobseekerhome.jade', {users: docs, image: thumb});
                }
                else {
                    // No data found
                    res.json(err);
                }
            }
        });
    });


    // Will merge both method as they are doing the same things
    app.get('/viewProfileForUpdation', function (req, res) {
        user.find({"_id": req.session.email}, function (err, docs) {
            if (err) {
                res.json(err);
            }
            else {

                if (docs.length == 1) {
                    var thumb = new Buffer(docs[0].img.data).toString('base64');
                    res.render('UpdateSeekerData.jade', {users: docs, image: thumb});
                }
                else {
                    // No data found
                    res.json(err);
                }
            }
        });
    });

    app.post('/updateSeekerData',function (req, res){

        console.log("Enshulidindsa");
        user.find(req.session.email, function(err, user) {
            u = user[0];
            if (err)
                res.json(err);
            else {

                u.father_name = req.body.job_seeker_father_name,
                u.mother_name = req.body.job_seeker_mother_name,
                u.nationality = req.body.job_seeker_nationality,
                u.religion = req.body.job_seeker_religion,
                u.current_addr = req.body.job_seeker_current_address,
                u.permanent_addr = req.body.job_seeker_permanent_address,
                u.home_phone = req.body.job_seeker_homephone,
                u.mobile_phone = req.body.job_seeker_mobile,
                u.office_phone = req.body.job_seeker_officephone,
                u.edu_level = req.body.job_seeker_edu_level,
                u.edu_start_year = req.body.job_seeker_edu_start_year,
                u.edu_end_year = req.body.job_seeker_edu_end_year,
                u.edu_institute_name = req.body.job_seeker_edu_institute_name,
                u.edu_addr = req.body.job_seeker_edu_institute_address,
                u.emp_post = req.body.job_seeker_designation,
                u.emp_company_name = req.body.job_seeker_comp_name,
                u.emp_company_addr = req.body.job_seeker_comp_address,
                u.emp_company_webaddr = req.body.job_seeker_comp_web_address,
                u.emp_responsibiility = req.body.job_responsibility,
                u.language_spoken = req.body.job_seeker_languages,
                u.skills = req.body.job_seeker_skill
            }

            // save the user
            u.save(function(err) {
                if (err)
                    res.json(err);
                else{
                    res.redirect('/viewProfile');
                }
            });

        });
    });


    getAppliedSeekersData = function(data,req,res){

        var temparr = [];

        for (var i=0;i<data.length;i++){
            temparr[i] = data[i] ;
        }

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
            res.render('ShowAppliedSeekers',{users: dataArr});
        });

    }

};