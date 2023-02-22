const clinicJson = require("../data/clinics.json");

module.exports = clinicJson.map(function (clinic) {
  return clinic.clinic;
});