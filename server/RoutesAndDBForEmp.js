/**
 * Created by ANKIT on 16/01/16.
 */
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

module.exports = function(app) {

    var Schema = new mongoose.Schema({

        _id: String,
        first_name: String,
        last_name: String,
        company_name: String,
        pwd: String,
        confirm_pwd: String,
        website: String,
        address: String,
        city: String,
        country: String,
        mobile_phone: Number,
        office_phone: Number
    });

    var user = mongoose.model('employers', Schema);

    app.post('/emp_registration',function(req,res){

        var a = new user({
            _id: req.body.mailID,
            last_name: req.body.emp_last_name,
            first_name : req.body.emp_first_name,
            company_name : req.body.company_name,
            pwd : req.body.pwd,
            confirm_pwd : req.body.confirm_pwd,
            website : req.body.web_addr,
            address : req.body.emp_address,
            city : req.body.city,
            country : req.body.country,
            mobile_phone :req.body.emp_mobile_no,
            office_phone : req.body.emp_office_no
        });

        a.save(function(err,doc){
            if(err){
                console.log("error in Emp");
                res.json(err);
            }
            else{
                res.redirect('/menuview');
            }
        });
    });

    app.get('/menuview',function(req,res){
        res.sendFile('EmployerLogin.html', { root: path.join(__dirname, './../public/htmlfiles') });
    });

    app.post('/employerValidation',function(req,res){

        user.find({"_id":req.body.username, "pwd":req.body.password}, function(err,docs){
           if(err){
               console.log("login error" + err);
               res.json(err);
           }
            else{
               if (docs.length == 1) {
                   res.render('EmployerHome.jade', {users: docs});
               }
               else {
                   // No data found
                   console.log("No EMP Data Found" + err)
                   res.json(err);
               }
           }
        });


    });

};