// TESTS

// 1) test wetger ir bit a new Farm can be created
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
