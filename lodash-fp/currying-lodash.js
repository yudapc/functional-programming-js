const curry = require("lodash/fp/curry");
const mergingName = (firstName, lastName) => firstName + " " + lastName;
const doMergeName = curry(mergingName);
const firstName = "Haha";
const gotFirstName = doMergeName(firstName);
const lastName = "Hihi";
const gotFullName = gotFirstName(lastName);

console.log("full name is ", gotFullName);
