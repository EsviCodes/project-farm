// class Animal

class Animal {
  constructor(age) {
    this.age = age;
  }
  getWeightInKg() {
    return this.age * this.maxWeigth();
  }
  maxWeigth() {
    return Math.min(this.weight, this.boundary);
  }
  getValueInEuros() {
    return this.getWeightInKg() * this.price;
  } // write the function
}

// Pig class extended Animal
class Pig extends Animal {
  constructor(age) {
    super(age);
    this.weight = 2.3;
    this.boundary = 700;
    this.price = 4;
  }
}

//  Cow class extended Animal
class Cow extends Animal {
  constructor(age) {
    super(age);
    this.weight = 1.5;
    this.boundary = 1200;
    this.price = 5;
  }
}

// Horse class extended Animal
class Horse extends Animal {
  constructor(age) {
    super(age);
    this.weight = 1.7;
    this.boundary = 1000;
    this.price = 10;
  }
}

module.exports = { Animal, Pig, Cow, Horse };
