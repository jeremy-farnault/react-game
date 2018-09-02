import { IHeroesBettlefield } from "../../core/models";

import * as React from "react";
import styled from "styled-components";

interface IProps {
  heroes: IHeroesBettlefield
}

// interface IState {}

class Heroes extends React.PureComponent<IProps, {}> {

  public render() {
    return (
      Object.keys(this.props.heroes).map((heroId: string) => {
        return (
          <HeroStyled key={this.props.heroes[heroId].playerId + heroId}/>
        )
      })
    )
  }
}

export default Heroes;

const HeroStyled = styled.div`
  width: 20px;
  height: 20px;
  background-color: aqua;
`;
