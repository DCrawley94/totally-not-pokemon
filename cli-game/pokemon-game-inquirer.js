const inquirer = require('inquirer');
const { starters, Rival } = require('./game-resources');
const Trainer = require('../constructors/trainer-constructor');
const Pokemon = require('../constructors/pokemon-constructors');
const Battle = require('../constructors/battle-constructor');

let player;
let playerPokemon;
let battle;

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
    default: 'Trainer'
  },
  {
    type: 'list',
    name: 'pokemon',
    message: 'Choose your pokemon!',
    choices: ['Charmander', 'Squirtle', 'Bulbasaur'],
    default: 'Squirtle'
  },
  {
    type: 'confirm',
    name: 'battle',
    message: 'Your Rival has challenged you, prepare for battle!'
  },
  {
    type: 'confirm',
    name: 'repeat',
    message: 'Would you like to play again?'
  }
];

const game = () => {
  inquirer
    .prompt(questions.slice(0, 3))
    .then((answers) => {
      player = new Trainer(answers.name);
      playerPokemon = starters[answers.pokemon];
      player.catch(playerPokemon);
      battle = new Battle(player, Rival, player.bag[0], Rival.bag[0]);
      if (answers.battle) {
        battle.fight();
      } else {
        console.log('You ran away from the battle...');
      }
    })
    .then(() => {
      inquirer.prompt(questions[3]).then((answers) => {
        if (answers.repeat) {
          game();
        }
      });
    });
};

game();
