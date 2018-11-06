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

const criteriaById = R.propEq("id", 3);
const findById = R.find(criteriaById);
const resultFindById = findById(data);

console.log("find data by ID");
console.log(resultFindById);

module.exports = { criteriaById };
