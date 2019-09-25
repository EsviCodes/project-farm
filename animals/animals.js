// class Animal

class Animal {
  constructor(age) {
    this.age = age;
  }
  getWeightInKg() {
    return this.age * this.weight;
  }
}

// Pig class extended Animal

class Pig extends Animal {
  constructor(age, weight) {
    super(age);
    this.weight = 2.3;
  }
}

//  Cow class extended Animal
class Cow extends Animal {
  constructor(age, weight) {
    super(age);
    this.weight = 1.5;
  }
}

// Horse class extended Animal
class Horse extends Animal {
  constructor(age, weight) {
    super(age);
    this.weight = 1.7;
  }
}

module.exports = { Animal, Pig, Cow, Horse };
