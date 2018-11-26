- ~~Actions, reducers, model, create store file~~

- ~~Start with rendering an empty battlefield.~~
  - ~~Empty battlefield is a set of col * lines tiles that can have different states.~~
    - ~~Where do the tiles get their state from?~~
      - ~~Redux -> connect App to redux and add a 2 dimensions grid containing all the tiles state~~
  - ~~BF -> Tiles -> Idle tile, attack tile...~~

1 - ~~Connect battlefield to redux~~
2 - ~~Create player sub reducer~~
    a - ~~Heroes~~
    b - ~~Cards~~
3 - ~~Create action to update heroes~~
4 - ~~Create action to update tiles~~
5 - ~~Trigger actions of click on hero~~

~~Actions selector for hero -> component~~
~~Change style Action Buttons~~
~~Trigger new tiles on click on actions~~
~~Selected action button should be low opacity or other style~~
~~Click on a hero already selected shouldnt do anything~~
~~Find a style for the selected hero~~
~~Change hovered hero style~~

~~Different tiles/size/color depending of the action~~
    - ~~Movement~~
    - ~~Attack~~
    - ~~Ranged Attack~~
    - ~~Magic~~

~~Change style idle tiles (use old style)~~

~~Hero action zone next to the battlefield~~

~~Hero Details zone~~
    - ~~Sort charateristics alphabetically~~
    - ~~Display in non camel case~~
    - ~~Add header zone (Details + name)~~
    - ~~Add description on hover miniature~~
    - ~~Add skills~~
    - ~~Add life points, magic points and armor~~

~~Heroes initiative zone (see design in notebook)~~
    - ~~Sort the heroes~~
    - ~~Style zone~~
    - ~~Add icons for the skills with description on tooltip~~
    - ~~Find images for life points magic points and armmor points~~
    - ~~Add tooltips on everything (name heroes, characs...)~~
    - ~~Minimal details provided by the zone above the initiative zone~~
    - ~~Zone right of initiative zone used for selected hero (not current one)~~
    - ~~Fix buggy tooltips~~
    - ~~Display only a certain number + button to say if there is more~~
    - ~~Button end turn~~
    - ~~Button zoom on small details hero to open real details~~
    - ~~Modal for details on click on hero~~
    - ~~Click on hero in initiative get selected~~

~~Action points zone~~
    - ~~Display it somewhere at the bottom. Near the current hero detail zone~~
    - ~~Fix selection of actions~~
    - ~~When click on hero on battlefield stop changing the tiles~~
    - ~~Change the tiles on change current hero~~
    - ~~Initialize tiles with first hero on component mount~~
    - ~~Click on hero then action, recalculate the tiles even for non current hero~~

~~Find a better way to display the details zone (above initiative zone see design in notebook)~~
~~Find a better way to display the actions~~
~~Find a way to separate visually inspected hero and current hero~~

~~Set up action points visual and usage~~
    - ~~Above the action zone make a zone for the action points~~
    - ~~Add actions points current in the IHeroBattlefield class~~
    - ~~3 actions points per hero~~
    - ~~Remove an action points on action taken for the moment~~
    - ~~Fix after movement hero has no action selected~~
    - ~~No more action if no action point left (disable actions and change design)~~
    - ~~Fix first hero don't have the red halo~~

~~Set up timer visual and usage~~
    - ~~Timer visual~~
    - ~~Different colors with time passing~~
    - ~~Select next hero automatically~~

~~Set up points per team visual;~~
    - ~~2 zones on top of battlefield on both sides~~
    - ~~Color of text depends on the current hero. Same team or other team~~
    - ~~Count points based on the list and when it changes~~

Set up cards visual and basic usage;
    - ~~Deck design on the battlefield~~
    - ~~Redux actions to:~~
        - ~~Load the cards in the session (hand and deck)~~
        - ~~Play a card (remove from hand put at the end of the deck)~~
        - ~~Draw a card (remove from deck put in the hand)~~
    - Modal to see the current hand
    - Decide maximum hand size
    - Play a card takes an action
    - Draw a card takes an action
    - Can't draw if maximum hand size is reached
    - Can zoom on the card
    https://github.com/inooid/react-redux-card-game
    https://github.com/inooid/react-redux-card-game/blob/master/src/components/Card/Card.scss

Attack and kill heroes to win the game;

Map travel based on The Dwarves

Find background the right height

Put all color values etc in grid and colors file
http://www.tayloredmktg.com/rgb/
https://www.color-hex.com/color/ff3447

https://www.google.co.nz/imgres?imgurl=https%3A%2F%2Fwww.destructoid.com%2F%2Ful%2F514993-review-the-banner-saga-3%2Fbs3-3-noscale.jpg&imgrefurl=https%3A%2F%2Fwww.destructoid.com%2Freview-the-banner-saga-3-514993.phtml&docid=50h0THZQV7az4M&tbnid=l8V6ltptY99V4M%3A&vet=10ahUKEwiutO2T4ozeAhXHXisKHX4pBpQQMwgyKAMwAw..i&w=1920&h=1080&bih=1009&biw=1858&q=banner%20saga%203&ved=0ahUKEwiutO2T4ozeAhXHXisKHX4pBpQQMwgyKAMwAw&iact=mrc&uact=8
