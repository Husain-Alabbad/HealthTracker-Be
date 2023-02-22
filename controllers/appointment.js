// Require Model
const Appointment = require("../models/Appointment");


// Require Moment
const moment = require('moment');

exports.appointment_create_get = (req, res) =>{
    Appointment.findById(req.query._id)
    .populate("user")
    .then(appointment => {
    
        res.json({ appointment });
    })
    .catch(err => {
        console.log(err);
    })
}


exports.appointment_create_post = (req, res) => {
    console.log(req.body);
    let appointment = new Appointment(req.body);

    // Save appointment
    appointment.save()
    .then((appointments)=>{

        res.json({ appointments })
        console.log("appointments:",appointments);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send({
            message: 'This is an error! Please try again later', err:err
         });
    });
}

// HTTP GET - Appointment Index
exports.appointment_index_get = (req, res) => {
    Appointment.find().populate("user")
    .then(appointments => {
        res.json({ appointments })
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - Appointment Index for a spicific user

exports.appointment_index_get_one = (req, res) => {
        console.log("reqqqqqqqqqqq",req.body);
        Appointment.find({ user:req.body._id}).populate("user")
        .then(appointments => {
            res.json({ appointments })
        })
        .catch(err => {
            console.log(err);
        })
    }

// HTTP GET - Load appointment Edit Form
exports.appointment_edit_get = (req, res) => {
    Appointment.findById(req.query._id)
    .populate("user")
    .then(appointment => {
    
        res.json({ appointment });
    })
    .catch(err => {
        console.log(err);
    })
}


// HTTP PUT - Appointment Update
exports.appointment_update_put = (req, res) => {
    console.log(req.body._id);
    Appointment.findByIdAndUpdate(req.body._id, req.body,{new:true})
    .then((appointment) => {
        res.json({appointment})
    })
    .catch(err => {
        console.log(err)
    });
}

  // HTTP DELETE -  Appointment
  exports.appointment_delete_get = (req, res) => {
    console.log("R",req.query._id);
    Appointment.findByIdAndDelete(req.query._id)
    .then((appointment)=>{

        res.json({appointment})
    })
    .catch(err => {
        console.log(err);
    })
};