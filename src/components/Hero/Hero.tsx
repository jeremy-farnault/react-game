import { IHeroBattlefield, ITile } from "../../core/models";
import { constants } from "../../utils/constants";
import { HeroStyled } from "./HeroStyles";

import * as React from "react";

interface IProps {
  hero: IHeroBattlefield
  heroSelected: boolean
  selectHero: (hero: IHeroBattlefield) => void
  tile: ITile
}

// interface IState {}

export interface IStyledHero {
  posX: number
  posY: number
  shadowColor: string
}

class Hero extends React.PureComponent<IProps, {}> {

  public render() {
    const h = this.props.hero;
    return (
      <HeroStyled
        onClick={this.selectHero}
        shadowColor={this.props.tile.state}
        posX={this.props.tile.posX + (constants.tileSize - h.assets.battlefieldPath.width) / 2}
        posY={this.props.tile.posY - 4}
        src={h.assets.battlefieldPath.path}
        height={50}/>
    );
  }

  private selectHero = () => {
    this.props.selectHero(this.props.hero);
  };
}

export default Hero;
