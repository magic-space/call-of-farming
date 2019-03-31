var plants = {
  garlic: {
    name: "Garlic",
    pl: "Garlics",
    price: 50,
    time: 3,
    season: "spring",
    multipleHarvest: true
  },
  kale: {
    name: "Kale",
    pl: "Kales",
    price: 120,
    time: 8,
    season: "spring"
  },
  potato: {
    name: "Potato",
    pl: "Potatoes",
    price: 80,
    time: 7,
    season: "spring"
  },
  tulip: {
    name: "Tulip",
    pl: "Tulips",
    price: 30,
    time: 15,
    season: "spring"
  },
  radish: {
    name: "Radish",
    pl: "Radishes",
    price: 25,
    time: 10,
    season: "summer"
  },
  cabbage: {
    name: "Cabbage",
    pl: "Cabbages",
    price: 40,
    time: 20,
    season: "summer"
  },
  corn: {
    name: "Corn",
    pl: "Corns",
    price: 30,
    time: 15,
    season: "summer"
  },
  sunflower: {
    name: "Sunflower",
    pl: "Sunflowers",
    price: 50,
    time: 25,
    season: "summer"
  },
  grape: {
    name: "Grape",
    pl: "Grapes",
    price: 60,
    time: 18,
    season: "autumn"
  },
  pumpkin: {
    name: "Pumpkin",
    pl: "Pumpkins",
    price: 40,
    time: 20,
    season: "autumn"
  }
};

Object.keys(plants).forEach(k => {
  plants[k].id = k;
});


var plantUtil = {
  getPlant: p => {
    let plant = plants[p];
    // try plural
    if (!plant) {
      const _p = Object.keys(plants).find(k => {
        const _plant = plants[k];
        if (_plant.pl.toLowerCase() === p) {
          return true;
        }
      });
      if (_p) {
        plant = plants[_p];
      }
    }

    return plant;
  },
  getSeedPrice: p => {
    let plant = plantUtil.getPlant(p);
    if (!plant) {
      return 0;
    } else {
      if (plant.multipleHarvest) {
        return plant.price * 10;
      } else {
        return plant.price * 5;
      }
    }
  }
};