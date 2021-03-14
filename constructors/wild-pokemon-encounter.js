const Pokemon = require('./pokemon-constructors');

const Butterfree = new Pokemon('Butterfree', 'triii', 'Poison Powder', 'grass');
const Weedle = new Pokemon('Weedle', 'weedle', 'Poison Sting', 'grass');
const Pidgey = new Pokemon('Pidgey', 'pii', 'Gust');
const Rattata = new Pokemon('Rattata', 'tata', 'Tackle');
const Pikachu = new Pokemon('Pikachu', 'pika', 'Thundershock');
const Magikarp = new Pokemon('Magikarp', 'blub', 'Splash', 'water');
const Goldeen = new Pokemon('Goldeen', 'bubble', 'Bubble', 'water');
const Psyduck = new Pokemon('Psyduck', 'psyy', 'Hypnosis', 'water');
const Krabby = new Pokemon('Krabby', 'snap', 'Snip', 'water');
const Seel = new Pokemon('Seel', 'hmm', 'Water Cannon', 'water');
const Zubat = new Pokemon('Zubat', 'zuzu', 'Supersonic');
const Geodude = new Pokemon('Geodude', 'grr', 'Slam');
const Clefairy = new Pokemon('Clefairy', 'clef', 'Uppercut');
const Ponyta = new Pokemon('Ponyta', '*horse noises*', 'Scorch', 'fire');
const Magmar = new Pokemon('Magmar', 'fire', 'Flamethrower', 'fire');

const woodPokemon = [Butterfree, Weedle, Pidgey, Rattata, Pikachu];
const lakePokemon = [Magikarp, Goldeen, Psyduck, Krabby, Seel];
const cavernPokemon = [Zubat, Geodude, Clefairy, Ponyta, Magmar];

class Forest_Encounter {
  constructor(trainer) {
    this.pokemonSelection = woodPokemon;
    this.trainer = trainer;
    this.wildPokemon = this.pokemonSelection[Math.floor(Math.random() * 5)];
  }
  run() {
    return 'You ran away...';
  }

  catchPokemon() {
    this.trainer.catch(this.wildPokemon);
    return `Congratulations, you caught ${this.wildPokemon.name}`;
  }
}

class Lake_Encounter {
  constructor(trainer) {
    this.pokemonSelection = lakePokemon;
    this.trainer = trainer;
    this.wildPokemon = this.pokemonSelection[Math.floor(Math.random() * 5)];
  }
  run() {
    return 'You ran away...';
  }

  catchPokemon() {
    this.trainer.catch(this.wildPokemon);
    return `Congratulations, you caught ${this.wildPokemon.name}`;
  }
}

class Cavern_Encounter {
  constructor(trainer) {
    this.pokemonSelection = cavernPokemon;
    this.trainer = trainer;
    this.wildPokemon = this.pokemonSelection[Math.floor(Math.random() * 5)];
  }
  run() {
    return 'You ran away...';
  }

  catchPokemon() {
    this.trainer.catch(this.wildPokemon);
    return `Congratulations, you caught ${this.wildPokemon.name}`;
  }
}

module.exports = { Forest_Encounter, Lake_Encounter, Cavern_Encounter };
