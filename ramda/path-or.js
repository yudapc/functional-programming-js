const R = require("ramda");

const data = {
  body: {
    id: 1,
    message: {
      value: "testing value nested"
    }
  }
};

const getMessageValue = R.pathOr("", ["body", "message", "value"]);
console.log("get data message value from object nested attributes");
console.log("value: ", getMessageValue(data));

module.exports = { data, getMessageValue };
