const countryJson = require("../data/countries.json");

module.exports = countryJson.map(function (country) {
  return country.country;
});