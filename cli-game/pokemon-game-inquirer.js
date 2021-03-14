const inquirer = require('inquirer');
const { starter, Rival } = require('../game-resources');
const Trainer = require('../constructors/trainer-constructor');
const Pokemon = require('../constructors/pokemon-constructors');
const Forest_Encounter = require('../constructors/wild-pokemon-encounter');
const areas = require('../areas');

const questionOne = {
  type: 'input',
  name: 'name',
  message: "What's your name?",
  default: 'Trainer',
};
const questionTwo = {
  type: 'list',
  name: 'pokemon',
  message: 'Choose your pokemon!',
  choices: ['Charmander', 'Squirtle', 'Bulbasaur'],
  default: 'Squirtle',
};
const questionThree = {
  type: 'confirm',
  name: 'What do you want to do?',
};
