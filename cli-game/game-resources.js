const Pokemon = require('../constructors/pokemon-constructors');
const Trainer = require('../constructors/trainer-constructor');

const Bulbasaur = new Pokemon('Bulbasaur', 'bulba bulba', 'Vine Whip', 'grass');
const Squirtle = new Pokemon('Squirtle', 'squir squir', 'Bubble', 'water');
const Charmander = new Pokemon('Charmander', 'char char', 'Ember', 'fire');
const starters = [Bulbasaur, Squirtle, Charmander];

const Rival = new Trainer('Rival');
Rival.catch(starters[[Math.floor(Math.random() * 2)]]);

module.exports = { starters, Rival };
