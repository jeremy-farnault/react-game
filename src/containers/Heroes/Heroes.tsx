import { IHeroBattlefield, ITile } from "../../core/models";

import * as React from "react";
import Hero from "../../components/Hero/Hero";

interface IProps {
  heroes: IHeroBattlefield[]
  selectHero: (hero: IHeroBattlefield) => void
  tiles: ITile[][]
  setNewActionPointsValue: (hero: IHeroBattlefield) => void
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
                hero={hero}
                heroSelected={hero.selected}
                setNewActionPointsValue={this.props.setNewActionPointsValue}
                selectHero={this.props.selectHero}/>
        );
      })
    );
  }
}

export default Heroes;
