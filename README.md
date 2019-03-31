## PLAN

* Redesign bottom section
    * Decided if the detail section will stay
        * 3 different details sections -> reduce to one
            * Hero selected will be display in the action and details section as the page. Must include a way of showing team it belongs to
    * Center the timer?
* Integrate HumbleBundle assets
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

* Defending should put the current hero on shadow color and not the foes

## RESOURCES

[RGB Chart](http://www.tayloredmktg.com/rgb/)
[Colors](https://www.color-hex.com/color/ff3447)
[Banner Saga](https://www.google.co.nz/imgres?imgurl=https%3A%2F%2Fwww.destructoid.com%2F%2Ful%2F514993-review-the-banner-saga-3%2Fbs3-3-noscale.jpg&imgrefurl=https%3A%2F%2Fwww.destructoid.com%2Freview-the-banner-saga-3-514993.phtml&docid=50h0THZQV7az4M&tbnid=l8V6ltptY99V4M%3A&vet=10ahUKEwiutO2T4ozeAhXHXisKHX4pBpQQMwgyKAMwAw..i&w=1920&h=1080&bih=1009&biw=1858&q=banner%20saga%203&ved=0ahUKEwiutO2T4ozeAhXHXisKHX4pBpQQMwgyKAMwAw&iact=mrc&uact=8)
[React Redux card game](https://github.com/inooid/react-redux-card-game)
[React drag and drop](http://react-dnd.github.io/react-dnd/about)
[Lego assets](https://legogames.fandom.com/wiki/Category:LEGO_The_Lord_of_the_Rings:_The_Video_Game_Images)
