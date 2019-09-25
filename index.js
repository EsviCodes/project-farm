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

  calcultateIncomeCrops() {
    return this.crops
      .map(crop => crop.getYieldInEuros())
      .reduce((a, b) => a + b, 0);
  }

  calculateIncomeAnimals() {
    return this.animals
      .map(animal => animal.getValueInEuros())
      .reduce((a, b) => a + b, 0);
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

// Print Status of my Farm
const farm = new Farm("Vegan Heaven for Rescuded Farm Animals");
farm.addCrop(new Wheat(100));
farm.addCrop(new Sugarcane(100));
farm.addAnimal(new Cow(100, "Betsy the Cow"));
farm.addAnimal(new Cow(200, "Dude the Male Cow"));
farm.addAnimal(new Cow(300, "Catherine the Cow"));
farm.addAnimal(new Pig(250, "Dolly the Pig"));
farm.addAnimal(new Horse(300, "Harry the Horse"));
farm.addAnimal(new Horse(500, "Meghan the Horse"));
farm.addAnimal(new Horse(21, "Archie the Horse"));

console.log(`--------------------------------------
- Farm: ${farm.name}   
- No. of crops: ${farm.crops.length}                                
- Crops: ${farm.crops}         
- No. of animals: ${farm.animals.length} 
- Names of animals: ${farm.animals
  .map(animal => animal.name)
  .join(", ")}             
- Total income: ${Math.round(farm.calculateIncome())}€  
- Income crops: ${Math.round(
  farm.calcultateIncomeCrops()
)}€ to use to take care for the animals. Thanks for your donation! 
- Income animals: ${Math.round(
  farm.calculateIncomeAnimals()
)}€ to use to take care for the animals. Thanks for your donation! 
--------------------------------------`);

module.exports.Farm = Farm;
