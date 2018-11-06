const R = require("ramda");

const data = {
  name: "ramda",
  age: 45,
  completed: true,
  title: "Degree"
};

const dataNameAndTitle = R.pickAll(["name", "title"]);
console.log("show data name and title");
console.log(dataNameAndTitle(data));

module.exports = { dataNameAndTitle };
