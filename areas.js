const areas = {
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
      directions: {
        west: 'meadow0',
        north: 'forest0',
        east: 'lake0',
      },
    },
    town1: {
      name: 'Viridian City',
      decription:
        '<p>You have made it to Viridian city, the size of the city is almost overwhelming</p>',
      amenities: {
        shop: 'shop0', //this is gonna be a variable,
        hospital: 'pokecentre', //as is this
        gym: 'gym0', //and this
      },
      directions: {
        east: 'mountain0',
        south: 'forest1',
      },
    },
  },

  meadows: {
    meadow0: {
      decription:
        '<p>You arrive in a large open meadow, you can see pokemon moving in the tall grass</p>',
      directions: {
        east: 'town0',
      },
      pokemon: 'array of normal pokemon', //use pokemon constructor to make 5 or so normal pokes
    },
  },

  forests: {
    forest0: {
      decription:
        '<p>You step into the forest, the air is filled with the sounds of wild pokemon</p>',
      directions: {
        north: 'forest1',
        south: 'town0',
      },
      pokemon: 'array of foresty pokemon', //use pokemon constructor to make 5 or so forest pokes
    },
    forest1: {
      description:
        '<p> As you move through the forest you see your rival on the path ahead. He challenges you to a battle</p>',
      directions: {
        north: 'town1',
        south: 'forest0',
      },
      events: 'encounter0', // battle variable
    },
  },

  lakes: {
    lake0: {
      decription:
        'The sunlight is reflected in the surface of the water as you approach, you can seeing pokemon splashing in the water by the shore.',
      directions: {
        west: 'town0',
      },
      pokemon: 'array of water pokemon', //use pokemon constructor to make 5 or so water pokes
    },
  },
};
