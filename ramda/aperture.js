const R = require("ramda");

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const apertureData = R.aperture(2, data);
console.log(apertureData);

module.exports = { data, apertureData };
