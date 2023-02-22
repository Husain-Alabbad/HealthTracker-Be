// Require Model
const Record = require("../models/Record");


// Require Moment
const moment = require('moment');

exports.record_create_get = (req, res) =>{
    Record.findById(req.query._id)
    .populate("user")
    .populate("Appointment")
    .populate("Medicine")


    .then(record => {
    
        res.json({ record });
    })
    .catch(err => {
        console.log(err);
    })
}

exports.record_create_post = (req, res) => {
    console.log(req.body);
    let record = new Record(req.body);
    // Save appointment
    record.save()
    .then((records)=>{

        res.json({ records })
        console.log("records:",records);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send({
            message: 'This is an error! Please try again later', err:err
         });
    });
}

exports.record_index_get_one = (req, res) => {
    console.log("reqqqqqqqqqqq",req.body);
    Record.find({ user:req.body._id})
    .populate("user")
    .populate("Appointment")
    .populate("Medicine")
    
    .then(records => {
        res.json({ records })
    })
    .catch(err => {
        console.log(err);
    })
}
// HTTP GET - Record Index
exports.record_index_get = (req, res) => {
    Record.find()
    .populate("appointment")
    .populate("medicine")
    .populate('user')

    .then(records => {
        res.json({ records: records })
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - Load Record Edit Form
exports.record_edit_get = (req, res) => {
    Record.findById(req.query._id)
    .populate("appointment")
    .populate("medicine")
    .populate('user')

    .then(record => {

        res.json({ record });
    })
    .catch(err => {
        console.log(err);
    })
}


// HTTP PUT - Record Update
exports.record_update_put = (req, res) => {
    console.log(req.body._id);
    Record.findByIdAndUpdate(req.body._id, req.body,{new:true})
    .then((record) => {
        res.json({record})
    })
    .catch(err => {
        console.log(err)
    });
}

  // HTTP DELETE -  Record
  exports.record_delete_get = (req, res) => {
    console.log(req.query._id);
    Record.findByIdAndDelete(req.query._id)
    .then((record)=>{

        res.json({record})
    })
    .catch(err => {
        console.log(err);
    })
};