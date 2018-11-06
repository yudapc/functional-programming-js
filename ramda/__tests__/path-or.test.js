const expect = require("expect.js");
const pathOr = require("../path-or");

describe("pathOr.js", () => {
  describe("#getMessageValue", () => {
    it("should equal empty string", () => {
      expect(pathOr.getMessageValue({ id: 3 })).to.eql("");
    });
    it("should equal value", () => {
      expect(pathOr.getMessageValue(pathOr.data)).to.eql(
        pathOr.data.body.message.value
      );
    });
  });
});
