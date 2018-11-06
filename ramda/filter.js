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

const criteria = x => x.completed;
const listDataFiltered = R.filter(criteria);
console.log("show data filtered by completed is true");
console.log(listDataFiltered(data));

module.exports = { criteria };
