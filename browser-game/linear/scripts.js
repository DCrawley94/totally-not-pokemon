$(function () {
  //console.log(stories);
  const $storyContainer = $('#story-container');
  const $imgContainer = $('#image-container');
  const $choiceContainer = $('#choice-container');

  const stories = [
    {
      id: 0,
      text:
        'You are ready to start your pokemon adventure. In front of you is Professor Oak and the only Pokemon he has left for you is a slightly grumpy Pikachu',
      choiceArray: [{ target: 'pt', text: 'Are you ready for your adventure?' }]
      //mp3: '<source src="./music/Intro.mp3" type="audio/mpeg">',
    },
    {
      id: 1,
      text:
        'You stand in your hometown ready for an adventure what do you want to do first?',
      choices: [
        // { target: 'Boring Ending Placeholder', text: 'Go back to bed...' },
        { target: 'gf1', text: 'Continue on you adventure!' }
      ]
    },
    {
      id: 2,
      text:
        'As you move through the forest towards the next town you spot your rival on the path ahead. He challenges you to a battle!',
      choices: [
        { target: 'gf2', text: 'Bring it on!' },
        { target: 'pt', text: "I'm not ready for this" }
      ]
    },

    {
      id: 2,
      text:
        'You have achieved victory over your rival, until next time anyway. Proceed towards the next town?',
      choices: [
        // {
        //   target: 'forestEncounter placeholder',
        //   text: 'I think I can see a wild Pokemon over there...'
        // },
        { target: 'gf3', text: 'If we hurry up we can get there before dark!' }
      ]
    },
    {
      id: 3,
      text:
        'As you continue on the path you come across another Trainer who looks very anxious... /n /n They have lost their Rattata somewhere in the trees, will you help with the search? ',
      choices: [
        // { target: 'makeAFriend placeholder', text: 'Of course I will!' },
        // {
        //   target: 'nextTown placeholder',
        //   text: "I can't delay, I need to make it to the next town!"
        // }
      ]
    }
  ];

  //takes the choice object and returns buttons
  function getChoiceHTML(choices) {
    return choices
      .map((choice) => {
        return `<button class="choice-btn" data-target='${choice.target}'> ${choice.text} </button>`;
      })
      .concat();
  }

  //Takes story object and returns paragraph elements with story text
  function getStoryHTML(story) {
    return `<p class="story-text"> ${story.text} </p>`;
  }

  //checks if story has reach the end
  function checkIsEnded(story) {
    if (story.paths) {
      return false;
    }
    return true;
  }

  //Takes id and displays the interactive story
  function displayInteractiveStory(stories, id) {
    const story = stories[id];

    const $story = $(getStoryHTML(story));
    $story.hide();
    $story.fadeIn(1000);

    $storyContainer.append($story);
    if (checkIsEnded(story)) {
      $choiceContainer.html(
        '<button class="path-btn" data-target="replay">Replay?</button>'
      );
    } else {
      $choiceContainer.html(getChoiceHTML(story.choices));
    }
  }

  //event handler for reaching end of the story
  $choiceContainer.click((event) => {
    const $choiceBtn = $(event.target);
    const nextStoryId = $choiceBtn.attr('data-target');

    if (nextStoryId === 'replay') {
      $storyContainer.html(' ');
      $choiceContainer.html(' ');
      displayInteractiveStory(stories, 0);
    } else {
      displayInteractiveStory(stories, nextStoryId);
    }
  });

  displayInteractiveStory(stories, 0);
});
