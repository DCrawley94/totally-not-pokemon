const Pokemon = require('./pokemon-constructors');

const Butterfree = new Pokemon('Butterfree', 'triii', 'Poison Powder', 'grass');
const Weedle = new Pokemon('Weedle', 'weedle', 'Poison Sting', 'grass');
const Pidgey = new Pokemon('Pidgey', 'pii', 'Gust');
const Rattata = new Pokemon('Rattata', 'tata', 'Tackle');
const Pikachu = new Pokemon('Pikachu', 'pika', 'Thundershock');

const forestPokemon = [Butterfree, Weedle, Pidgey, Rattata, Pikachu];

class Forest_Encounter {
  constructor(trainer) {
    this.pokemonSelection = forestPokemon;
    this.trainer = trainer;
    this.wildPokemon = forestPokemon[Math.floor(Math.random() * 5)];
  }
  run() {
    return 'You ran away...';
  }

  catchPokemon() {
    this.trainer.catch(this.wildPokemon);
    return `Congratulations, you caught ${this.wildPokemon.name}`;
  }
}

module.exports = Forest_Encounter;
