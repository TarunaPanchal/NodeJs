const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');
const schooladd = require('./school_add');
const studentadd = require('./student_add');
const b = require('./school_schema');
const c = require('./student_schema');

mongoose.connect(config.path);

//app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post('/Addschool', (req, res) => schooladd.addschool(req, res));

app.post('/Addstudent', (req, res) => studentadd.addstudent(req, res));

app.get('/SchoolDetail', (req, res) => {
    b.find({}, function (err, school) {
        if (err) {
            res.send("error find school detail");
            next();
        }
        res.json(school);
    })
})

app.get('/', (req , res)=>{

  //c.find({Std:req.query.Std,Gender:req.query.Gender},(err , school)=>{
   c.find( { $or : [ { Std:req.query.Std }, {Gender:req.query.Gender} , {StudentName:req.query.StudentName} ,{School_name:req.query.School_name}] },(err , school)=>{
        if(err){
            return res.send(err);
        }
        res.json(school);
    });     
});


app.get('/both', (req , res)=>{

     // c.find({Std:req.query.Std,Gender:req.query.Gender},(err , school)=>{
      c.find( {$and : [
            { $or : [ {Std:req.query.Std } ] },
            { $or : [ {  Gender:req.query.Gender} ] }
        ] },(err , school)=>{
            if(err){
                return res.send(err);
            }
            res.json(school);
        });  


    });

// app.get('/', (req, res) => {


//     // c.find({Std:req.query.Std,Gender:req.query.Gender},(err , school)=>{
//     c.aggregate([{ $lookup: { from: "school_details", localField: "School_name", foreignField: "_id", as:"School_Name" } },{$unwind: "$School_Name"},
//      { $match: { $or: [{ Gender: req.query.Gender }, { StudentName: req.query.StudentName},{School_name:req.query.School_name}] } }],
//      (err, school) => {
//         if (err) {
//             res.send(err);
//         }
//         // console.log("hu");
//       //  console.log(school);
//         // console.log(School_Name);
//         res.json(school);
//     });
// });

app.get('/StudentDetail', function (req, res) {
    c.aggregate([{ $lookup: { from: "school_details", localField: "School_name", foreignField: "_id", as:"School_Name" } }],function (err, school) {
        if (err) {
            res.send("error find Student detail");
            next();
        }
        res.json(school);
    })
})

app.listen(3000, () => {
    console.log(`Server listening on 3000`);
})