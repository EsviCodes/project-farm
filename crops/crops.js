// Crops-class
class Crop {
  constructor(acres) {
    this.acres = acres;
  }
}

// Wheat-class
class Wheat extends Crop {
  getYieldInKg() {
    return Math.pow(this.acres * 1.5, 1.3);
  }
}

// Sugercane-class

class Sugercane extends Crop {
  getYieldInKg() {
    return (this.acres * 2.6) ** 1.1;
  }
}
module.exports = { Crop, Wheat, Sugercane };
