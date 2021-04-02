class Pokemon {
  constructor(name, sound, move, type) {
    this.name = name;
    this.hitPoints = 100;
    this.attackDamage = 10;
    this.sound = sound;
    this.move = move;

    if (type === 'water' || type === 'fire' || type === 'grass') {
      this.type = type;
    } else {
      this.type = 'normal';
    }

    if (this.type === 'water') {
      this.weakness = 'grass';
    } else if (this.type === 'fire') {
      this.weakness = 'water';
    } else if (this.type === 'grass') {
      this.weakness = 'fire';
    } else {
      this.weakness = 'no weakness';
    }

    if (this.type === 'water') {
      this.strength = 'fire';
    } else if (this.type === 'fire') {
      this.strength = 'grass';
    } else if (this.type === 'grass') {
      this.strength = 'water';
    } else {
      this.strength = 'no strength';
    }
  }
  talk() {
    return this.sound;
  }

  useYourMoves() {
    return this.move;
  }
}

module.exports = Pokemon;
