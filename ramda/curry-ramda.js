const R = require("ramda");
const mergingName = (firstName, lastName) => firstName + " " + lastName;
const doMergeName = R.curry(mergingName);
const firstName = "Haha";
const gotFirstName = doMergeName(firstName);
const lastName = "Hihi";
const gotFullName = gotFirstName(lastName);

console.log("full name is ", gotFullName);
