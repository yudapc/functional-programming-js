const expect = require("expect.js");
const filter = require("../filter");

describe("filter.js", () => {
  describe("#criteria", () => {
    it("should equal", () => {
      expect(filter.criteria({ completed: true })).to.eql(true);
    });
  });
});
