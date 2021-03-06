const Trainer = require('./trainer-constructor');
const Pokemon = require('./pokemon-constructor');

describe('Trainer', () => {
  it('returns a new trainer with a name property', () => {
    const trainer1 = new Trainer();
    expect(trainer1).toHaveProperty('name');
    const trainer2 = new Trainer('Bob');
    expect(trainer2.name).toBe('Bob');
  });
  it('returns a new trainer with a bag property', () => {
    const trainer1 = new Trainer();
    expect(trainer1).toHaveProperty('bag');
    const trainer2 = new Trainer('Bob');
    expect(trainer2.bag).toEqual([]);
  });
  describe('catch', () => {
    it('it pushes a pokemon object to the trainers bag', () => {
      const trainer1 = new Trainer();
      const Pikachu = new Pokemon();
      const pokemon2 = new Pokemon();
      trainer1.catch(Pikachu);
      expect(trainer1.bag.length).toBe(1);
      expect(trainer1.bag).toEqual([Pikachu]);
      trainer1.catch(pokemon2);
      expect(trainer1.bag.length).toBe(2);
      expect(trainer1.bag).toEqual([Pikachu, pokemon2]);
    });
  });
});
