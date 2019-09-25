const { Wheat, Sugarcane } = require("./crops/crops.js");
const { Pig, Cow, Horse } = require("./animals/animals.js");
const { Farm } = require("./index");

/* Add a test that adds wheat, sugarcane, some cows, some horses and a pig to the farm and calculates its total value. Make sure the test passes and make sure the calculations are correct.*/

// TEST Creating of a new Farm
test("A new Farm can be created", () => {
  const farm = new Farm();
  expect(farm).toBeTruthy();
});

// TEST add crops & animals
test("Add crops to new farm", () => {
  const farm = new Farm("TEST_NAME");
  farm.addCrop(new Wheat(100));
  farm.addCrop(new Sugarcane(100));
  farm.addAnimal(new Cow(100));
  farm.addAnimal(new Cow(200));
  farm.addAnimal(new Cow(300));
  farm.addAnimal(new Pig(250));
  farm.addAnimal(new Horse(300));
  farm.addAnimal(new Cow(500));
  farm.addAnimal(new Cow(10));
});

// TEST total value
test("The income of an empty farm is 0", () => {
  const farm = new Farm("TEST_NAME");
  expect(farm.calculateIncome()).toBe(0);
});

// TEST calculateIncome() Crops + Animals
test("Animals will be taken into account for calculateIncome", () => {
  const farm = new Farm();
  farm.addCrop(new Wheat(100));
  farm.addCrop(new Sugarcane(100));
  farm.addAnimal(new Cow(100));
  farm.addAnimal(new Cow(200));
  farm.addAnimal(new Cow(300));
  farm.addAnimal(new Pig(250));
  farm.addAnimal(new Horse(300));
  farm.addAnimal(new Cow(500));
  farm.addAnimal(new Cow(10));
  expect(farm.calculateIncome()).not.toBe(0);
});

// TEST calculateIncome() if the calculation is done correctly
test("Animals will be taken into account for calculateIncome", () => {
  const farm = new Farm();
  farm.addCrop(new Wheat(100));
  farm.addCrop(new Sugarcane(100));
  farm.addAnimal(new Cow(100));
  farm.addAnimal(new Cow(200));
  farm.addAnimal(new Cow(300));
  farm.addAnimal(new Pig(250));
  farm.addAnimal(new Horse(300));
  farm.addAnimal(new Cow(500));
  farm.addAnimal(new Cow(10));
  expect(farm.calculateIncome()).toBe(17643.37988546047);
});
