import { IHeroesBattlefield, ITile } from "../../core/models";

import * as React from "react";
import styled from "styled-components";

interface IProps {
  heroes: IHeroesBattlefield
  tiles: ITile[][]
}

// interface IState {}

class Heroes extends React.PureComponent<IProps, {}> {

  public render() {
    const h = this.props.heroes
    return (
      Object.keys(h).map((id: string) => {
        return (
          <HeroStyled
            posX={this.props.tiles[h[id].tileY][h[id].tileX].posX}
            posY={this.props.tiles[h[id].tileY][h[id].tileX].posY}
            key={h[id].playerId + id}
            src={h[id].assets.battlefieldPath}
            height={50}/>
        )
      })
    )
  }
}

export default Heroes;

const HeroStyled = styled.img`
position: absolute;
top: ${(props: {posX: number, posY: number}) => props.posY}px;
left: ${(props: {posX: number, posY: number}) => props.posX}px;
`;

