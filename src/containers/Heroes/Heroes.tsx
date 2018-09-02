import { IHeroesBattlefield } from "../../core/models";

import * as React from "react";
import styled from "styled-components";

interface IProps {
  heroes: IHeroesBattlefield
}

// interface IState {}

class Heroes extends React.PureComponent<IProps, {}> {

  public render() {
    const h = this.props.heroes
    return (
      Object.keys(h).map((id: string) => {
        console.log(h[id].assets.battlefieldPath)
        return (
          <HeroStyled key={h[id].playerId + id} src={h[id].assets.battlefieldPath} height={50} width={50}/>
        )
      })
    )
  }
}

export default Heroes;

const HeroStyled = styled.img`
`;

