// TESTS WHEAT

const { Wheat } = require("./crops");

test("The Wheat class can calculate a yield", () => {
  const wheat = new Wheat(100);
  expect(wheat.getYieldInKg()).toBeDefined();
});

test("The Wheat class calculates the proper yield", () => {
  const wheat = new Wheat(100);
  expect(wheat.getYieldInKg()).toBeCloseTo(674.4, 2);
});

// TESTS SUGERCANE

const { Sugercane } = require("./crops");

test("The Sugercane class can calculate a yield", () => {
  const sugercane = new Sugercane(100);
  expect(sugercane.getYieldInKg()).toBeDefined();
});

test("The Sugercane class calculates the proper yield", () => {
  const sugercane = new Sugercane(100);
  expect(sugercane.getYieldInKg()).toBeCloseTo(453.38869055124377);
});
