const { sgn } = require("../../src/stryker_gettingStarted.js");

const assert = require("assert");

describe("sgn", function () {
  it("returns 1 for a positive number", function () {
    const num = 2;

    const sign = sgn(num);

    assert.equal(sign, 1);
  });

  it("returns -1 for a negative number", function () {
    const num = -2;

    const sign = sgn(num);

    assert.equal(sign, -1);
  });
});
