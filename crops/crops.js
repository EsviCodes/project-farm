// Wheat-class
class Wheat {
  constructor(acres) {
    this.acres = acres;
  }

  getYieldInKg() {
    return Math.pow(this.acres * 1.5, 1.3);
  }
}

// Sugercane-class

class Sugercane {
  constructor(acres) {
    this.acres = acres;
  }

  getYieldInKg() {
    return (this.acres * 2.6) ** 1.1;
  }
}
module.exports = { Wheat, Sugercane };
