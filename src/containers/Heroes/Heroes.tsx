import { IHeroesBattlefield, ITile } from "../../core/models";
import { constants } from "../../utils/constants";

import * as React from "react";
import { HeroStyled } from "./HeroesStyles";

interface IProps {
  heroes: IHeroesBattlefield
  selectHero: () => void
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
          <HeroStyled
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
