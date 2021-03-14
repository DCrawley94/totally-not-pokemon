const Pokemon = require('../constructors/pokemon-constructors');
const Trainer = require('../constructors/trainer-constructor');
const Forest_Encounter = require('../constructors/wild-pokemon-encounter');

describe('Forest_Encounter', () => {
  it('should return an object with pokemonSelction, trainer and wildPokemon propertys', () => {
    const testTrainer = new Trainer('testTrainer');
    const testEncounter = new Forest_Encounter(testTrainer);
    expect(testEncounter).toHaveProperty('pokemonSelection');
    expect(testEncounter).toHaveProperty('trainer');
    expect(testEncounter).toHaveProperty('wildPokemon');
  });
  it('should have the method "run" which returns a string', () => {
    const testTrainer = new Trainer('testTrainer');
    const testEncounter = new Forest_Encounter(testTrainer);
    expect(typeof testEncounter.run()).toBe('string');
    expect(testEncounter.run()).toBe('You ran away...');
  });
  describe('catchPokemon', () => {
    it('return a string', () => {
      const testTrainer = new Trainer('testTrainer');
      const testEncounter = new Forest_Encounter(testTrainer);
      expect(typeof testEncounter.catchPokemon()).toBe('string');
      expect(testEncounter.catchPokemon()).toEqual(
        expect.stringContaining('Congratulations, you caught')
      );
    });
    it('adds the wild pokemon to the trainers bag', () => {
      const testTrainer = new Trainer('testTrainer');
      const testEncounter1 = new Forest_Encounter(testTrainer);
      const testEncounter2 = new Forest_Encounter(testTrainer);

      expect(testTrainer.bag.length).toBe(0);
      testEncounter1.catchPokemon();
      expect(testTrainer.bag.length).toBe(1);
      testEncounter2.catchPokemon();
      expect(testTrainer.bag.length).toBe(2);
      expect(testTrainer.bag[0]).toBeInstanceOf(Pokemon);
      expect(testTrainer.bag[1]).toBeInstanceOf(Pokemon);
    });
  });
});
