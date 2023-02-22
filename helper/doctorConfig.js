const doctorJson = require("../data/doctors.json");

module.exports = doctorJson.map(function (doctor) {
  return doctor.doctor;
});