const Pokemon = require('../constructors/pokemon-constructors');
const Battle = require('../constructors/battle-constructor');
const Trainer = require('../constructors/trainer-constructor');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Battle', () => {
  test('Basic properties', () => {
    const pokemon1 = new Pokemon('Pikachu');
    const pokemon2 = new Pokemon('Charmanda');
    const battle1 = new Battle('Nick', 'Duncan', pokemon1, pokemon2);
    expect(battle1.trainer1).toBe('Nick');
    expect(battle1.trainer2).toBe('Duncan');
    expect(battle1.pokemon1).toBe(pokemon1);
    expect(battle1.pokemon2).toBe(pokemon2);
    expect(battle1).toHaveProperty('fight');
    expect(battle1.turn).toEqual(true);
    battle1.fight();
  });
  describe('fight method', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const pokemon1 = new Pokemon('Squirtle', 'Squir', 'Bubble', 'water');
    const pokemon2 = new Pokemon('Charmanda', 'Char', 'Ember', 'fire');
    const trainer1 = new Trainer('Nick');
    const trainer2 = new Trainer('Duncan');
    const battle1 = new Battle(trainer1, trainer2, pokemon1, pokemon2);

    test('console.logs', () => {
      battle1.fight();
      expect(consoleSpy).toHaveBeenCalledWith(
        'Squirtle used Bubble for 12.5 damage, it was super effective'
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        "Charmanda used Ember for 7.5 damage, it wasn't very effective"
      );
      expect(consoleSpy).toHaveBeenCalledWith('Nick wins!');
      expect(consoleSpy).toHaveBeenCalledTimes(16);
    });

    test('pokemon hitpoints should be restored to 100 after each battle ', () => {
      const pokemon1 = new Pokemon('Pikachu');
      const pokemon2 = new Pokemon('Charmanda');
      expect(pokemon1.hitPoints).toBe(100);
      expect(pokemon2.hitPoints).toBe(100);
      const battle = new Battle('A', 'B', pokemon1, pokemon2);
      battle.fight();
      expect(pokemon1.hitPoints).toBe(100);
      expect(pokemon2.hitPoints).toBe(100);
    });
  });
});
