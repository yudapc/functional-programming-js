const expect = require("expect.js");
const find = require("../find");

describe("find.js", () => {
  describe("#criteriaById", () => {
    it("should equal", () => {
      expect(find.criteriaById({ id: 3 })).to.eql(true);
    });
  });
});
