const { Wheat, Sugarcane } = require("./crops/crops.js");
const { Pig, Cow, Horse } = require("./animals/animals.js");
const { Farm } = require("./index");

// TESTS

// 1) test wether or not a new Farm can be created

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

// TEST total income
test("The income of an empty farm is 0", () => {
  const farm = new Farm("TEST_NAME");
  expect(farm.calculateIncome()).toBe(0);
});

test("The income of a 100 Wheat + 100 Sugarcane farm is X", () => {
  const farm = new Farm("TEST_NAME");
  farm.addCrop(new Wheat(100));
  farm.addCrop(new Sugarcane(100));
  expect(farm.calculateIncome()).toBeCloseTo(1918.37, 1);
});

// TEST Add animal to farm
test("We can add an animal to our farm", () => {
  const farm = new Farm("TEST_NAME");
  farm.addAnimal(new Pig(100));
  farm.addAnimal(new Horse(100));
  farm.addAnimal(new Cow(100));
});

// TEST calculateIncome() Crops + Animals
test("Animals will be taken into account for calculateIncome", () => {
  const farm = new Farm();
  farm.addAnimal(new Cow(100));
  expect(farm.calculateIncome()).not.toBe(0);
});
