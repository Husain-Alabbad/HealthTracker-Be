// Require Mongoose
const mongoose = require('mongoose');

// Schema
const appointmenteSchema = mongoose.Schema({
    reason: String,
    date: { type: Date, default: Date.now },

    doctor: String,
    clinic:String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

},{ timestamps: true }) // means createdAt and updatedAt

// Model
const Appointment = mongoose.model("Appointment", appointmenteSchema);

// Export model to share it with controller
module.exports = Appointment;