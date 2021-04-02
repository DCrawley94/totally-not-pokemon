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
    choice1: 'Go back to bed...',
    choice2: 'Continue on you adventure!',
    nextChoice: [boringEnding, gloomyForest],
  },
  gloomyForest: {
    text:
      'As you move through the forest towards the next town you spot your rival on the path ahead. He challenges you to a battle!',
    choice1: 'Bring it on!',
    choice2: "I'm not ready for this",
    nextChoice: [rivalEncounter, palletTown],
  },

  gloomyForestPt2: {
    text:
      'You have achieved victory over your rival, until next time anyway. Proceed towards the next town?',
    choice1: 'I think I can see a wild Pokemon over there...',
    choice2: 'If we hurry up we can get there before dark!',
    nextChoice: [forestEncounter, gloomyForestPt3],
  },

  gloomyForestPt3: {
    text:
      'As you continue on the path you come across another Trainer who looks very anxious... /n /n They have lost their Rattata somewhere in the trees, will you help with the search? ',
    choice1: 'Of course I will!',
    choice2: "I can't delay, I need to make it to the next town!",
    nextChoice: [makeAFriend, nextTown],
  },
};
