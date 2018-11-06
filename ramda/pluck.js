const R = require("ramda");

const data = [
  {
    id: 1,
    name: "Farhan Setiawan",
    completed: true
  },
  {
    id: 2,
    name: "Zidhan Setia",
    completed: false
  },
  {
    id: 3,
    name: "Zahra Indah",
    completed: false
  },
  {
    id: 4,
    name: "Budi Bolang",
    completed: true
  }
];

const getNames = R.pluck("name");
console.log("show names");
console.log(getNames(data));

module.exports = { getNames };
