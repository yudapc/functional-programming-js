const expect = require("expect.js");
const pickAll = require("../pick-all");

const data = {
  id: 1,
  name: "this is name",
  title: "halah jan",
  completed: true
};

const expected = {
  name: "this is name",
  title: "halah jan"
};

describe("pick-all.js", () => {
  describe("#dataNameAndTitle", () => {
    it("should not equal", () => {
      expect(pickAll.dataNameAndTitle({ name: "ngapusi" })).not.to.eql(
        expected
      );
    });

    it("should equal", () => {
      expect(pickAll.dataNameAndTitle(data)).to.eql(expected);
    });
  });
});
