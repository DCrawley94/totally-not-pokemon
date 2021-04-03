class Battle {
  constructor(trainer1, trainer2, pokemon1, pokemon2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
    this.turn = true;
    this.fightIsOngoing = true;

    if (this.pokemon1.strength === this.pokemon2.type) {
      this.pokemon1.attackDamage *= 1.25;
      this.pokemon2.attackDamage *= 0.75;
    } else if (this.pokemon2.strength === this.pokemon1.type) {
      this.pokemon1.attackDamage *= 0.75;
      this.pokemon2.attackDamage *= 1.25;
    }
  }

  fight() {
    let attacker = this.pokemon1;
    let defender = this.pokemon2;

    if (this.pokemon1.hitPoints <= 0) {
      this.fightIsOngoing = false;
      console.log(`${this.pokemon2.name} wins!`);
    } else if (this.pokemon2.hitPoints <= 0) {
      this.fightIsOngoing = false;
      console.log(`${this.pokemon1.name} wins!`);
    }

    if (this.fightIsOngoing) {
      this.turn = !this.turn;
      if (this.turn) {
        attacker = this.pokemon2;
        defender = this.pokemon1;
        defender.hitPoints -= attacker.attackDamage;
      } else {
        attacker = this.pokemon1;
        defender = this.pokemon2;
        defender.hitPoints -= attacker.attackDamage;
      }

      if (attacker.strength === defender.type) {
        console.log(
          `${attacker.name} used ${attacker.move} for ${attacker.attackDamage} damage, it was super effective`
        );
      } else if (defender.strength === attacker.type) {
        console.log(
          `${attacker.name} used ${attacker.move} for ${attacker.attackDamage} damage, it wasn't very effective`
        );
      } else {
        console.log(
          `${attacker.name} used ${attacker.move} for ${attacker.attackDamage} damage`
        );
      }

      return this.fight();
    } else {
      return 'Battle is over';
    }
  }
}

module.exports = Battle;
