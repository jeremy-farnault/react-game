import Hero from "../../components/Hero/Hero";
import { IHeroBattlefield, ITile } from "../../core/models";
import { INewTile } from "../../core/reducers/battlefield";

import * as React from "react";

interface IProps {
  heroes: IHeroBattlefield[]
  selectHero: (hero: IHeroBattlefield) => void
  tiles: ITile[][]
  setNewActionPointsValue: (hero: IHeroBattlefield, pointLabel: string, newValue: number) => void
  updateTiles: (newTiles: INewTile[]) => void
}

// interface IState {}

class Heroes extends React.PureComponent<IProps, {}> {

  public render() {
    const h = this.props.heroes;
    return (
      h.map((hero: IHeroBattlefield) => {
        const tile = this.props.tiles[hero.tileY][hero.tileX];
        return (
          <Hero tile={tile}
                key={hero.playerId + hero.id}
                heroState={hero.state}
                heroes={h}
                hero={hero}
                updateTiles={this.props.updateTiles}
                heroSelected={hero.selected}
                setNewActionPointsValue={this.props.setNewActionPointsValue}
                selectHero={this.props.selectHero}/>
        );
      })
    );
  }
}

export default Heroes;
