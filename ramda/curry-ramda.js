const R = require("ramda");
const mergingName = (firstName, lastName) => firstName + " " + lastName;
const doMergeName = R.curry(mergingName);
const firstName = "Haha";
const getFirstName = doMergeName(firstName);
const lastName = "Hihi";
const getFullName = getFirstName(lastName);

console.log("full name is ", getFullName);
