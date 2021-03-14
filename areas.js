exports.areas = {
  uniques: {
    unique0: {
      name: "Oak's Lab",
      description:
        '<p> You are ready to start your pokemon adventure. In front of you is Professor Oak and he is offering you a choice of 3 pokemon. Which do you choose?</p>',
    },
  },
  towns: {
    town0: {
      name: 'Pallet Town',
      decription:
        '<p>You stand in your hometown ready for an adventure where do you want to go first?</p>',
      actions: {
        travel: {
          west: 'meadows.meadow0',
          north: 'forests.forest0',
          east: 'lakes.lake0',
        },
      },
    },
    town1: {
      name: 'Viridian City',
      decription:
        '<p>You have made it to Viridian city, the size of the city is almost overwhelming</p>',
      actions: {
        visitShop: 'shop0', //this is gonna be a variable,
        visitGym: 'gym0', //and this,
        travel: {
          east: 'mountains.mountain0',
          south: 'forests.forest1',
        },
      },
    },
  },

  meadows: {
    meadow0: {
      decription:
        '<p>You arrive in a large open meadow, you can see pokemon moving in the tall grass</p>',
      actions: {
        findPokemon: 'randomEncounter',
        travel: {
          east: 'towns.town0',
        },
      },
    },
  },

  forests: {
    forest0: {
      decription:
        '<p>You step into the forest, the air is filled with the sounds of wild pokemon</p>',
      actions: {
        findPokemon: 'randomEncounter',
        travel: {
          north: 'forests.forest1',
          south: 'towns.town0',
        },
      },
    },
    forest1: {
      description:
        '<p> As you move through the forest you see your rival on the path ahead. He challenges you to a battle</p>',
      actions: {
        travel: {
          north: 'towns.town1',
          south: 'forests.forest0',
        },
      },
      events: 'encounter0', // battle variable
    },
  },

  lakes: {
    lake0: {
      decription:
        'The sunlight is reflected in the surface of the water as you approach, you can seeing pokemon splashing in the water by the shore.',
      actions: {
        findPokemon: 'randomEncounter',
        travel: {
          west: 'tows.town0',
        },
      },
    },
  },
};
