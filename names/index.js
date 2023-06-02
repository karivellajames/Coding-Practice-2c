const peopleNames = require("../country/state/city/index.js");
const getFirstName = require("../utilities/utils/index.js");

const getPeopleInCity = (peopleNames) => {
  return getFirstName(peopleNames);
};

module.exports = getPeopleInCity;
