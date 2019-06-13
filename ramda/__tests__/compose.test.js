const expect = require("expect.js");
const compose = require("../compose");
const R = require("ramda");

describe("compose.js", () => {
  describe("#execute", () => {
    it("should not equal", () => {
      expect(compose.execute("Zahra")).not.to.eql("Zahra");
    });

    it("should equal", () => {
      expect(compose.execute("Zahra")).to.eql("ZAHRA");
    });
  });
  describe("#count", () => {
    it("should equal", () => {
      const data = R.range(1, 6); // [ 1, 2, 3, 4, 5 ]
      expect(compose.count(data)).to.eql([6, 12, 18, 24, 30]);
    });
  });
});
