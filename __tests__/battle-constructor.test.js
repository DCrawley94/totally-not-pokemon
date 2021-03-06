const Pokemon = require('./pokemon-constructor');
const Battle = require('./battle-constructor');

describe('Battle', () => {
  it('should return an object', () => {
    const pokemon1 = new Pokemon('Pikachu');
    const pokemon2 = new Pokemon('Charmanda');
    const battle1 = new Battle('Nick', 'Duncan', pokemon1, pokemon2);
    expect(battle1.trainer1).toBe('Nick');
  });
  it('should have 2 trainer properties and 2 pokemon properties determined by given arguments', () => {
    const pokemon1 = new Pokemon('Pikachu');
    const pokemon2 = new Pokemon('Charmanda');
    const battle1 = new Battle('Nick', 'Duncan', pokemon1, pokemon2);
    expect(battle1).toHaveProperty('trainer2');
    expect(battle1).toHaveProperty('pokemon1');
    expect(battle1).toHaveProperty('pokemon2');
  });
  it('should have a fight property', () => {
    const pokemon1 = new Pokemon('Pikachu');
    const pokemon2 = new Pokemon('Charmanda');
    const battle1 = new Battle('Nick', 'Duncan', pokemon1, pokemon2);
    expect(battle1).toHaveProperty('fight');
  });
  it("battle has a property of 'turn' with a default of 1", () => {
    const pokemon1 = new Pokemon('Pikachu');
    const pokemon2 = new Pokemon('Charmanda');
    const battle1 = new Battle('Nick', 'Duncan', pokemon1, pokemon2);
    expect(battle1.turn).toEqual(1);
  });
  describe('fight', () => {
    it('when fight is first invoked, the turn in the battle should increment by 1', () => {
      const pokemon1 = new Pokemon('Pikachu');
      const pokemon2 = new Pokemon('Charmanda');
      const battle1 = new Battle('Nick', 'Duncan', pokemon1, pokemon2);
      battle1.fight();
      expect(battle1.turn).toBe(2);
    });
    it('when fight is first invoked, pokemon2s hitpoints should decrease', () => {
      const pokemon1 = new Pokemon('Pikachu');
      const pokemon2 = new Pokemon('Charmanda');
      const battle1 = new Battle('Nick', 'Duncan', pokemon1, pokemon2);
      battle1.fight();
      expect(pokemon2.hitPoints).toBeLessThan(10);
    });
    it('when fight is first invoked, the defending pokemon2s hitpoints should decrease by the attackDamage of the attacking pokemon', () => {
      const pokemon1 = new Pokemon('Pikachu');
      const pokemon2 = new Pokemon('Charmanda');
      const battle1 = new Battle('Nick', 'Duncan', pokemon1, pokemon2);
      battle1.fight();
      expect(pokemon2.hitPoints).toBe(8);
    });
    it('when fight is invoked, the turn increases by one', () => {
      const pokemon1 = new Pokemon('Pikachu');
      const pokemon2 = new Pokemon('Charmanda');
      const battle1 = new Battle('Nick', 'Duncan', pokemon1, pokemon2);
      battle1.fight();
      expect(battle1.turn).toBe(2);
      battle1.fight();
      expect(battle1.turn).toBe(3);
    });
    it('every time fight is invoked, the Pokemon taking damage switches', () => {
      const pokemon1 = new Pokemon('Pikachu');
      const pokemon2 = new Pokemon('Charmanda');
      const battle1 = new Battle('Nick', 'Duncan', pokemon1, pokemon2);
      battle1.fight();
      expect(battle1.turn).toBe(2);
      expect(pokemon2.hitPoints).toEqual(8);
      expect(pokemon1.hitPoints).toEqual(10);
      battle1.fight();
      expect(battle1.turn).toBe(3);
      expect(pokemon2.hitPoints).toEqual(8);
      expect(pokemon1.hitPoints).toEqual(8);
    });
    it("should increase or decrease attack damage of attacker if the type of opponent matches it's strength", () => {
      const pokemon1 = new Pokemon('Pikachu', 'squeek', 'Thundershock', 'fire');
      const pokemon2 = new Pokemon('Charmanda', 'roar', 'kick', 'grass');
      const battle1 = new Battle('Nick', 'Duncan', pokemon1, pokemon2);
      battle1.fight();
      expect(pokemon1.attackDamage).toBe(2.5);
      expect(pokemon2.attackDamage).toBe(1.5);
      const pokemon3 = new Pokemon('Charmanda', 'roar', 'kick', 'grass');
      const pokemon4 = new Pokemon('Pikachu', 'squeek', 'Thundershock', 'fire');
      const battle2 = new Battle('Nick', 'Duncan', pokemon3, pokemon4);
      battle2.fight();
      expect(pokemon3.attackDamage).toBe(1.5);
      expect(pokemon4.attackDamage).toBe(2.5);
      const pokemon5 = new Pokemon('Charmanda', 'roar', 'kick', 'normal');
      const pokemon6 = new Pokemon('Pikachu', 'squeek', 'Thundershock', 'fire');
      const battle3 = new Battle('Nick', 'Duncan', pokemon3, pokemon4);
      battle3.fight();
      expect(pokemon5.attackDamage).toBe(2);
      expect(pokemon6.attackDamage).toBe(2);
    });
    it('should return an appropriate message on every invocation of fight method', () => {
      const pokemon1 = new Pokemon('Pikachu', 'squeek', 'Thundershock', 'fire');
      const pokemon2 = new Pokemon('Charmander', 'roar', 'kick', 'grass');
      const battle1 = new Battle('Nick', 'Duncan', pokemon1, pokemon2);
      expect(battle1.fight()).toBe(
        'Pikachu used Thundershock, it was super effective'
      );
      const pokemon3 = new Pokemon('Charmander', 'roar', 'kick', 'grass');
      const pokemon4 = new Pokemon('Pikachu', 'squeek', 'Thundershock', 'fire');
      const battle2 = new Battle('Nick', 'Duncan', pokemon3, pokemon4);
      expect(battle2.fight()).toBe(
        "Charmander used kick, it wasn't very effective"
      );
      const pokemon5 = new Pokemon('Charmander', 'roar', 'kick', 'normal');
      const pokemon6 = new Pokemon('Pikachu', 'squeek', 'Thundershock', 'fire');
      const battle3 = new Battle('Nick', 'Duncan', pokemon5, pokemon6);
      expect(battle3.fight()).toBe('Charmander used kick');
    });
    it("should return an appropriate message dependent on who's turn it is", () => {
      const pokemon1 = new Pokemon('Pikachu', 'squeek', 'Thundershock', 'fire');
      const pokemon2 = new Pokemon('Charmander', 'roar', 'kick', 'grass');
      const battle1 = new Battle('Nick', 'Duncan', pokemon1, pokemon2);
      expect(battle1.fight()).toBe(
        'Pikachu used Thundershock, it was super effective'
      );
      expect(battle1.fight()).toBe(
        "Charmander used kick, it wasn't very effective"
      );
      const pokemon3 = new Pokemon('Charmander', 'roar', 'kick', 'normal');
      const pokemon4 = new Pokemon('Pikachu', 'squeek', 'Thundershock', 'fire');
      const battle2 = new Battle('Nick', 'Duncan', pokemon3, pokemon4);
      expect(battle2.fight()).toBe('Charmander used kick');
      expect(battle2.fight()).toBe('Pikachu used Thundershock');
    });
    it('should return a winner if a pokemon has zero or fewer hitpoints remaining', () => {
      const pokemon1 = new Pokemon('Pikachu', 'squeek', 'Thundershock', 'fire');
      const pokemon2 = new Pokemon('Charmander', 'roar', 'kick', 'grass');
      const battle1 = new Battle('Nick', 'Duncan', pokemon1, pokemon2);
      battle1.fight();
      battle1.fight();
      battle1.fight();
      battle1.fight();
      battle1.fight();
      battle1.fight();
      battle1.fight();
      battle1.fight();
      battle1.fight();
      battle1.fight();
      expect(battle1.fight()).toBe('Pikachu wins!');
      const pokemon3 = new Pokemon(
        'Pikachu',
        'squeek',
        'Thundershock',
        'grass'
      );
      const pokemon4 = new Pokemon('Charmander', 'roar', 'kick', 'fire');
      const battle2 = new Battle('Nick', 'Duncan', pokemon3, pokemon4);
      battle2.fight();
      battle2.fight();
      battle2.fight();
      battle2.fight();
      battle2.fight();
      battle2.fight();
      battle2.fight();
      battle2.fight();
      battle2.fight();
      battle2.fight();
      console.log(pokemon3.hitPoints, pokemon4.hitPoints);
      expect(battle2.fight()).toBe('Charmander wins!');
    });
    it('should ', () => {
      const pokemon1 = new Pokemon('Pikachu', 'squeek', 'Thundershock', 'fire');
      const pokemon2 = new Pokemon('Charmander', 'roar', 'kick', 'grass');
      const battle1 = new Battle('Nick', 'Duncan', pokemon1, pokemon2);
      battle1.fight();
      battle1.fight();
      battle1.fight();
      battle1.fight();
      battle1.fight();
      battle1.fight();
      battle1.fight();
      battle1.fight();
      battle1.fight();
      battle1.fight();
    });
  });
});
