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

const criteria = s => s;
const listData = R.map(criteria);
console.log("show list data:");
console.log(listData(data));

module.exports = { criteria };
