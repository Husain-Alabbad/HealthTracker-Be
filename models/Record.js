const mongoose = require("mongoose")
const doctor = require("../helper/doctorConfig")
const clinic = require("../helper/clinicConfig")

const recordSchema = mongoose.Schema({
    doctor:{
        type: String,
        // required: true,
        // enum: doctor
    },
    clinic:{
        type: String,
        // required: true,
        // enum: clinic
    },
    symptoms: String,
    doctorNote: String,
    medicine : 
    [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medicine'
    }]
    ,
    appointment :
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }
    ,
    user :
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Record = mongoose.model("Record", recordSchema);

// Export model to share it with controller
module.exports = Record;