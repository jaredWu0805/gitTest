var challenge = require('./challenge');

describe("Test challenge.js", function() {
  test("double should output 10 * 2", function() {
    expect(challenge.double(10)).toBe(20);
  });

  test("square should output 10 * 10", function() {
    expect(challenge.square(10)).toBe(Math.pow(10, 2));
  });
});
