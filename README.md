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

Hero action zone next to the battlefield

Hero Details zone

Heroes initiative zone

Put all color values etc in grid and colors file
http://www.tayloredmktg.com/rgb/
https://www.color-hex.com/color/ff3447
