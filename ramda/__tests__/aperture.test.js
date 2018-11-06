const expect = require("expect.js");
const aperture = require("../aperture");

const apertureDataExpected = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10]
];

describe("aperture.js", () => {
  describe("#apertureData", () => {
    it("should equal", () => {
      expect(aperture.apertureData).to.eql(apertureDataExpected);
    });
  });
});
