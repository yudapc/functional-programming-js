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

const keyword = "za";
const toLower = R.toLower;
const criteria = x => toLower(x.name).includes(keyword);
const searchDataByKeyword = R.filter(criteria);
console.log(`search data by keyword ${keyword}`);
console.log(searchDataByKeyword(data));

module.exports = { criteria };
