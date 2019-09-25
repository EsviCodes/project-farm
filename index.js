const { Crop, Wheat, Sugarcane } = require("./crops/crops.js");
const { Animal, Pig, Cow, Horse } = require("./animals/animals.js");

class Farm {
  constructor(name) {
    this.name = name;
    this.crops = [];
    this.animals = [];
  }

  addCrop(crop) {
    this.crops.push(crop);
  }
  calculateIncome() {
    const incomeCrops = this.crops
      .map(crop => crop.getYieldInEuros())
      .reduce((a, b) => a + b, 0);

    const incomeAnimals = this.animals
      .map(animal => animal.getValueInEuros())
      .reduce((a, b) => a + b, 0);

    return incomeCrops + incomeAnimals;
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }
}
module.exports.Farm = Farm;
