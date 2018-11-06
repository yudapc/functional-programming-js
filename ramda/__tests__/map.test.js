const expect = require("expect.js");
const map = require("../map");

describe("map.js", () => {
  describe("#criteria", () => {
    it("should equal", () => {
      expect(map.criteria(3)).to.eql(3);
    });
  });
});
