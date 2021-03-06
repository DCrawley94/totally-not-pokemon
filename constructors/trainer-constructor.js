class Trainer {
  constructor(name) {
    this.name = name;
    this.bag = [];
  }

  catch(pokemon) {
    this.bag.push(pokemon);
  }
}

module.exports = Trainer;
