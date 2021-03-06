const Pokemon = require('./pokemon-constructor');

describe('Pokemon', () => {
  it('it creates a new pokemon with a name property', () => {
    const firstPokemon = new Pokemon('Picachu');
    expect(firstPokemon.name).toBe('Picachu');
    const secondPokemon = new Pokemon('Charmanda');
    expect(secondPokemon.name).toBe('Charmanda');
  });

  it('creates a new pokemon with hit points', () => {
    const firstPokemon = new Pokemon('Picachu', 10);
    expect(firstPokemon.hitPoints).toBe(10);
  });

  it('creates a new pokemon with attack damage', () => {
    const firstPokemon = new Pokemon('Picachu', 10, 2);
    expect(firstPokemon.attackDamage).toBe(2);
  });

  it('creates a new pokemon with a sound', () => {
    const firstPokemon = new Pokemon('Picachu', 'ROAR!');
    expect(firstPokemon.sound).toBe('ROAR!');
  });

  it('creates a new pokemon with a move', () => {
    const firstPokemon = new Pokemon('Picachu', 'ROAR!', 'electricute');
    expect(firstPokemon.move).toBe('electricute');
  });

  it('creates new pokemon with a type if given, otherwise type is normal', () => {
    const firstPokemon = new Pokemon(
      'Picachu',
      'ROAR!',
      'electricute',
      'normal'
    );
    expect(firstPokemon.type).toBe('normal');
    const secondPokemon = new Pokemon('Picachu', 'ROAR!', 'electricute');
    expect(secondPokemon.type).toBe('normal');
    const thirdPokemon = new Pokemon(
      'Picachu',
      'ROAR!',
      'electricute',
      'water'
    );
    expect(thirdPokemon.type).toBe('water');
    const fourthPokemon = new Pokemon(
      'Picachu',
      'ROAR!',
      'electricute',
      'bread'
    );
    expect(fourthPokemon.type).toBe('normal');
  });

  it('creates a pokemon with a weakness property', () => {
    const firstPokemon = new Pokemon();
    expect(firstPokemon).toHaveProperty('weakness');
  });

  it('should create a new pokemon with a strength property', () => {
    const firstPokemon = new Pokemon();
    expect(firstPokemon).toHaveProperty('strength');
  });

  it('should assign the weakness property based on type', () => {
    const firstPokemon = new Pokemon(
      'Picachu',
      'ROAR!',
      'electricute',
      'water'
    );
    expect(firstPokemon.weakness).toBe('grass');
    const secondPokemon = new Pokemon(
      'Picachu',
      'ROAR!',
      'electricute',
      'grass'
    );
    expect(secondPokemon.weakness).toBe('fire');
    const thirdPokemon = new Pokemon(
      'Picachu',
      'ROAR!',
      'electricute',
      'normal'
    );
    expect(thirdPokemon.weakness).toBe('no weakness');
  });

  it('should assign the strength property based on type', () => {
    const firstPokemon = new Pokemon(
      'Picachu',
      'ROAR!',
      'electricute',
      'water'
    );
    expect(firstPokemon.strength).toBe('fire');
    const secondPokemon = new Pokemon(
      'Picachu',
      'ROAR!',
      'electricute',
      'grass'
    );
    expect(secondPokemon.strength).toBe('water');
    const thirdPokemon = new Pokemon(
      'Picachu',
      'ROAR!',
      'electricute',
      'normal'
    );
    expect(thirdPokemon.strength).toBe('no strength');
  });

  it('Every pokemon should have a talk property', () => {
    const firstPokemon = new Pokemon();
    expect(firstPokemon).toHaveProperty('talk');
  });

  it('Every pokemon should have a talk method which when invoked returns the pokemons sound', () => {
    const firstPokemon = new Pokemon('Pikachu', 'roar');
    expect(firstPokemon.talk()).toBe('roar');
  });

  it('Every pokemon should have a useYourMoves method which when invoked returns the pokemons move', () => {
    const firstPokemon = new Pokemon('Pikachu', 'roar', 'electrocute');
    expect(firstPokemon.useYourMoves()).toBe('electrocute');
  });
});
