const { Crop, Wheat, Sugarcane } = require("./crops/crops.js");

// TESTS

// 1) test wether or not a new Farm can be created
const { Farm } = require("./index");

test("A new Farm can be created", () => {
  const farm = new Farm();
  expect(farm).toBeTruthy();
});

// 2) test wether or not my intance farm (object) can have a name property
test("A Farm can have a name", () => {
  const farm = new Farm("TEST_NAME");
  expect(farm.name).toBe("TEST_NAME");
});

// TEST Add crop to farm
test("We can add a crop to our farm", () => {
  const farm = new Farm("TEST_NAME");
  farm.addCrop(new Wheat(100));
});
