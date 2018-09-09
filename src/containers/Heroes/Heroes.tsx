import { IHeroBattlefield, IHeroesBattlefield, ITile } from "../../core/models";

import * as React from "react";
import Hero from "../../components/Hero/Hero";

interface IProps {
  heroes: IHeroesBattlefield
  selectHero: (hero: IHeroBattlefield) => void
  tiles: ITile[][]
}

// interface IState {}

class Heroes extends React.PureComponent<IProps, {}> {

  public render() {
    const h = this.props.heroes
    return (
      Object.keys(h).map((id: string) => {
        const tile = this.props.tiles[h[id].tileY][h[id].tileX]
        return (
          <Hero tile={tile}
                key={h[id].playerId + id}
                hero={h[id]}
                selectHero={this.props.selectHero}/>
        )
      })
    )
  }
}

export default Heroes;
