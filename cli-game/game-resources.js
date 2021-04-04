const Pokemon = require('../constructors/pokemon-constructors');
const Trainer = require('../constructors/trainer-constructor');

const Bulbasaur = new Pokemon('Bulbasaur', 'bulba bulba', 'Vine Whip', 'grass');
const Squirtle = new Pokemon('Squirtle', 'squir squir', 'Bubble', 'water');
const Charmander = new Pokemon('Charmander', 'char char', 'Ember', 'fire');
const starters = {
  Bulbasaur: Bulbasaur,
  Squirtle: Squirtle,
  Charmander: Charmander
};
const randomStarter = (starters) => {
  const keys = Object.keys(starters);
  return starters[keys[(keys.length * Math.random()) << 0]];
  //bitwise operator was recommended to me
};

const Rival = new Trainer('Rival');

module.exports = { starters, Rival, randomStarter };
