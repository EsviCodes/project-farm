// Crops-class
class Crop {
  constructor(acres) {
    this.acres = acres;
  }

  getYieldInEuros() {
    return this.getYieldInKg() * this.price;
  }
  getCosts() {
    return this.acres * this.costs;
  } // write function
}

// Wheat-class
class Wheat extends Crop {
  constructor(acres) {
    super(acres);
    this.price = 1.5;
    this.costs = 340;
  }
  getYieldInKg() {
    return Math.pow(this.acres * 1.5, 1.3);
  }
}

// Sugercane-class

class Sugarcane extends Crop {
  constructor(acres) {
    super(acres);
    this.price = 2;
    this.costs = 166;
  }
  getYieldInKg() {
    return (this.acres * 2.6) ** 1.1;
  }
}
module.exports = { Crop, Wheat, Sugarcane };
