// Requiring Medicine Model
const Medicine = require("../models/Medicine");

// Requiring User model for populating 
const User = require("../models/User");


// Requiring Moment for time
const moment = require('moment');

// HTTP GET API for creating medicine
exports.medicine_create_get = (req, res) =>{
    Medicine.findById(req.query._id)
    .populate("user")
    .then(medicine => {
    
        res.json({ medicine });
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP POST API for creating medicine
exports.medicine_create_post = (req, res) => {
    console.log(req.body);
    // creating new instance from Medicine
    let medicine = new Medicine(req.body);

    // Saving newly created medicine
    medicine.save()
    .then((medicines) => {
        res.json({medicines})
        console.log("medicines: ",medicines);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send("Medicine cannot be created! Please try again later");
    });
}

// HTTP GET API for displaying the medicines 
exports.medicine_index_get = (req, res) => {
    Medicine.find()
    .populate("user")
    .then((medicines) => {
        res.json({ medicines })
    })
    .catch((err) => {
        console.log(err);
    })
}

// HTTP GET API for displaying medicines for specific user
exports.medicine_index_get_one = (req, res) => {
    console.log("request",req.body);
    Medicine.find({ user:req.body._id}).populate("user")
    .then(medicine => {
        res.json({ medicine })
    })
    .catch(err => {
        console.log(err);
    })
}


// HTTP GET API for loading the medicine edit form
exports.medicine_edit_get = (req, res) => {
    Medicine.findById(req.query._id)
    .populate("user")
    .then(medicine => {

        res.json({ medicine });
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP PUT API for updating the medicine
exports.medicine_update_put = (req, res) => {
    console.log(req.body._id);
    Medicine.findByIdAndUpdate(req.body._id, req.body,{new:true})
    .then((medicine) => {
        res.json({medicine})
    })
    .catch(err => {
        console.log(err)
    });
}

// HTTP DELETE API for deleting any medicine
exports.medicine_delete_get = (req, res) => {
    console.log(req.query._id);
    Medicine.findByIdAndDelete(req.query._id)
    .then((medicine)=>{

        res.json({medicine})
    })
    .catch(err => {
        console.log(err);
    })
};