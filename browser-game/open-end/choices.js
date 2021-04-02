const choices = {
  start: {
    text:
      'You are ready to start your pokemon adventure. In front of you is Professor Oak and he is offering you a choice of 3 pokemon. Which do you choose?',
    choice1: 'Bulbasaur',
    choice2: 'Squirtle',
    choice3: 'Charmander',
    //mp3: '<source src="./music/Intro.mp3" type="audio/mpeg">',
    nextChoice: ['pallet-town'],
  },
  palletTown: {
    text:
      'You stand in your hometown ready for an adventure what do you want to do first?',
    choice1: 'Search for wild Pokemon!',
    choice2: 'Continue on you adventure!',
    nextChoice: [whichStarterArea, gloomyForest],
  },
  whichStarterArea: {
    text:
      'Oak said that there are three main areas nearby which contain wild Pokemon. Where do you want to look?',
    choice1: 'Search the nearby woods',
    choice2: 'Head over to the lake',
    choice3: 'Explore the small cavern',
    nextChoice: [woods0, lake0, cavern0],
  },
  woods0: {
    text:
      'You step into the woods, the air is filled with the sounds of wild pokemon',
    choice1: 'Search for wild Pokemon',
    choice2: 'Return to Pallet Town',
    nextChoice: [woodsEncounter, palletTown],
  },
  lake0: {
    text:
      'The sunlight is reflected in the surface of the water as you approach, you can seeing pokemon splashing in the water by the shore.',
    choice1: 'Search for wild Pokemon',
    choice2: 'Return to Pallet Town',
    nextChoice: [lakeEncounter, palletTown],
  },
  cavern0: {
    text:
      'You step into the dark cavern, as your eyesight adjusts you see an abundance of wild Pokemon',
    choice1: 'Search for wild Pokemon',
    choice2: 'Return to Pallet Town',
    nextChoice: [cavernEncounter, palletTown],
  },
  gloomyForest: {
    text:
      'As you move through the forest towards the next town you spot your rival on the path ahead. He challenges you to a battle!',
    choice1: 'Bring it on!',
    choice2: "I'm not ready for this",
    nextChoice: [rivalEncounter, palletTown],
  },
};
