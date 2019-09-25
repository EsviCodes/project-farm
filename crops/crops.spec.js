const { Crop, Wheat, Sugercane } = require("./crops");

// TESTS CROP
test("A crop can store its area size", () => {
  const crop = new Crop(12345);
  expect(crop.acres).toBe(12345);
});

// TESTS WHEAT

test("The Wheat class can calculate a yield", () => {
  const wheat = new Wheat(100);
  expect(wheat.getYieldInKg()).toBeDefined();
});

test("The Wheat class calculates the proper yield", () => {
  const wheat = new Wheat(100);
  expect(wheat.getYieldInKg()).toBeCloseTo(674.4, 2);
});

// TESTS SUGERCANE

test("The Sugercane class can calculate a yield", () => {
  const sugercane = new Sugercane(100);
  expect(sugercane.getYieldInKg()).toBeDefined();
});

test("The Sugercane class calculates the proper yield", () => {
  const sugercane = new Sugercane(100);
  expect(sugercane.getYieldInKg()).toBeCloseTo(453.38869055124377);
});
