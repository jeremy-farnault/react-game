## PLAN

* Integrate HumbleBundle assets
    * Button displaying the list of heroes on popup
    * Modal with the full initiative list
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


exports.default = PinCode;
let styles = react_native_1.StyleSheet.create({
    container: {
      width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewTitle: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 2
    },
    row: {
        alignItems: 'center',
        height: grid_1.grid.unit * 5.5
    },
    colButtonCircle: {
        marginLeft: grid_1.grid.unit / 2,
        marginRight: grid_1.grid.unit / 2,
        alignItems: 'center',
        width: grid_1.grid.unit * 8,
        height: grid_1.grid.unit * 4
    },
    colEmpty: {
        marginLeft: grid_1.grid.unit / 2,
        marginRight: grid_1.grid.unit / 2,
        width: grid_1.grid.unit * 8,
        height: grid_1.grid.unit * 4
    },
    colIcon: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    text: {
        fontSize: grid_1.grid.unit * 2,
        fontWeight: '200'
    },
    buttonCircle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: grid_1.grid.unit * 8,
        height: grid_1.grid.unit * 4,
        backgroundColor: 'rgb(242, 245, 251)',
        borderRadius: grid_1.grid.unit * 4
    },
    textTitle: {
        fontSize: 20,
        fontWeight: '200',
        lineHeight: grid_1.grid.unit * 2.5
    },
    textSubtitle: {
        fontSize: grid_1.grid.unit,
        fontWeight: '200',
        textAlign: 'center'
    },
    flexCirclePassword: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topViewCirclePassword: {
        flexDirection: 'row',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewCircles: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textDeleteButton: {
        fontWeight: '200',
        marginTop: 5
    },
    grid: {
      width: '100%',
        flex: 7
    }
});