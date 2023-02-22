// Requiring Mongoose
const mongoose = require('mongoose');

// Requiring Nationality enumerate
const nationality = require('../helper/countriesConfig');

// Requiring doctors enumerate
// const doctors = require('../helper/doctorConfig');

// Require clinics enumerate
// const clinics = require('../helper/clinicConfig');

// User profile Schema
const profileSchema = mongoose.Schema({
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    userImage: {
        type: String,
        default: ''
    },
    nationality: {
        type: String,
        required: true,
        enum: nationality
    },
    dob: {
        type: Date
    },
    favoriteDoctor: {
        type: String,
        // required: true,
        // enum: doctors
    },
    favoriteClinic: {
        type: String,
        // required: true,
        // enum: clinics
    },
    record: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Records'
    }]
}, { timestamps: true })

// User Profile Model
const Profile = mongoose.model("Profile", profileSchema);

// Exporting Medicine model to the controller
module.exports = Profile;