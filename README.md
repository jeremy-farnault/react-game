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

Heroes initiative zone (see design in notebook)
    - Sort the heroes

Find a better way to display the details zone (above initiative zone see design in notebook)
Find a better way to display the actions
Find a way to separate visually inspected hero and current hero

Put all color values etc in grid and colors file
http://www.tayloredmktg.com/rgb/
https://www.color-hex.com/color/ff3447

https://www.google.co.nz/imgres?imgurl=https%3A%2F%2Fwww.destructoid.com%2F%2Ful%2F514993-review-the-banner-saga-3%2Fbs3-3-noscale.jpg&imgrefurl=https%3A%2F%2Fwww.destructoid.com%2Freview-the-banner-saga-3-514993.phtml&docid=50h0THZQV7az4M&tbnid=l8V6ltptY99V4M%3A&vet=10ahUKEwiutO2T4ozeAhXHXisKHX4pBpQQMwgyKAMwAw..i&w=1920&h=1080&bih=1009&biw=1858&q=banner%20saga%203&ved=0ahUKEwiutO2T4ozeAhXHXisKHX4pBpQQMwgyKAMwAw&iact=mrc&uact=8
