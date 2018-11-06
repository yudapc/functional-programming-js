const expect = require("expect.js");
const search = require("../search");

describe("search.js", () => {
  describe("#criteria", () => {
    it("should not equal", () => {
      expect(search.criteria({ name: "ngapusi" })).to.eql(false);
    });

    it("should equal", () => {
      expect(search.criteria({ name: "zahra" })).to.eql(true);
    });
  });
});
