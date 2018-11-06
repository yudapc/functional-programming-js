const fp = require("lodash/fp");
const data = [
  {
    firstName: "justin",
    lastName: "fuller",
    phone: "1234568490"
  },
  {
    firstName: "Haha",
    lastName: "fulHihiler",
    phone: "0219384983"
  },
  {
    firstName: "Ceki",
    lastName: "fulleManerr",
    phone: "09749729719"
  }
];
const formatPhone = c => ({
  ...c,
  phone: formattingPhoneNumber(c)
});
const formattingPhoneNumber = c => {
  const slice2 = c.phone.slice(0, 2);
  const slice3 = c.phone.slice(3, 5);
  const slice4 = c.phone.slice(6);
  return slice2 + slice3 + "-" + slice4;
};
const formatData = fp.compose(
  fp.map(formatPhone),
  fp.uniqBy("phone"),
  fp.filter("phone"),
  fp.sortBy("firstName")
);
console.log(formatData(data));
