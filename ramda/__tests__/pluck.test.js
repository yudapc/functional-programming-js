const expect = require("expect.js");
const pluck = require("../pluck");

const data = [{ id: 1, name: "haha" }, { id: 2, name: "hihi" }];
const expected = ["haha", "hihi"];

describe("pluck.js", () => {
  describe("#criteriaById", () => {
    it("should equal", () => {
      expect(pluck.getNames(data)).to.eql(expected);
    });
  });
});
