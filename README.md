## PLAN

* Redesign all screen
    * On click on hero in initiative bar will show the frame absolute positioning above the miniature
    * Contains basic information: life, magic, armor  and skills
* Integrate HumbleBundle assets
    * Cards modal redesign
    * Button displaying the list of heroes on popup
    * Modal with the full initiative list
    * Hero detail panel
    * Hero full details popup
* Attack and kill heroes to win the game
    * Decide on the design / behaviour after a death
        * If hero enters tile, state should become hero, if hero leaves should be back to death status
        * Don't remove the hero from the list
            * Has dead status
            * Not displayed on the initiative bar
            * Can't be selected
            * His non blocking to walk
            * Can't be attacked

## DESIGN

* SOLO GAME
    * STORY MODE
    * SKIRMISH
* MULTI-PLAYER
    * LOCAL
    * ONLINE
* COMMON
    * TEAM BUILDING
    * DECK BUILDING

## FEATURES IDEAS

* Animation using react move
* Map travel based on The Dwarves
* Chat between players
* Save user data (players)
* Design multiplayer
* Start writing the story for the solo game

## TECHNICAL DEBT

* Put all color values in color file
* Put all strings in string file
* Put all constants in file
* Sort the constants file and the model file

## BUGS

* Passing to next hero does not reinitialize the tiles (on timer change)
* Action points are not reset for new turn of hero (on timer change)
* Defending should put the current hero on shadow color and not the foes
* Should be able to unselect on click on any empty space

## RESOURCES

[Chat](https://pusher.com/tutorials/react-direct-messaging)
[RGB Chart](http://www.tayloredmktg.com/rgb/)
[Colors](https://www.color-hex.com/color/ff3447)
[Banner Saga](https://www.destructoid.com/review-the-banner-saga-3-514993.phtml8)
[React Redux card game](https://github.com/inooid/react-redux-card-game)
[React drag and drop](http://react-dnd.github.io/react-dnd/about)
[Lego assets](https://legogames.fandom.com/wiki/Category:LEGO_The_Lord_of_the_Rings:_The_Video_Game_Images)
