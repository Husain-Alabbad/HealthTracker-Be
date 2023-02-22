// Requiring Mongoose
const mongoose = require('mongoose');

// Requiring doctors enumerate
// const doctors = require('../helper/doctorConfig');

// Medicine Schema
const medicineSchema = mongoose.Schema({
    name: String,
    expiryDate: {type: Date, default: Date.now},
    prescribedBy: {
        type: String,
        required: true,
        // enum: doctors
    },
    dosage: String,
    directions: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

// Medicine Model
const Medicine = mongoose.model("Medicine", medicineSchema);

// Exporting Medicine model to the controller
module.exports = Medicine;

