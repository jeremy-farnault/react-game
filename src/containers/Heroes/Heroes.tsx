import { IHeroBattlefield, IHeroesBattlefield, ITile } from "../../core/models";
import { constants } from "../../utils/constants";

import * as React from "react";
import { HeroStyled } from "./HeroesStyles";

interface IProps {
  heroes: IHeroesBattlefield
  selectHero: (hero: IHeroBattlefield) => void
  tiles: ITile[][]
}

// interface IState {}

export interface IStyledHero {
  posX: number
  posY: number
}

class Heroes extends React.PureComponent<IProps, {}> {

  public render() {
    const h = this.props.heroes
    return (
      Object.keys(h).map((id: string) => {
        const tile = this.props.tiles[h[id].tileY][h[id].tileX]
        return (
          <HeroStyled
            onClick={() => this.props.selectHero(h[id])}
            posX={tile.posX + (constants.tileWithBorder - h[id].assets.battlefieldPath.width) / 2}
            posY={tile.posY - 4}
            key={h[id].playerId + id}
            src={h[id].assets.battlefieldPath.path}
            height={50}/>
        )
      })
    )
  }
}

export default Heroes;
