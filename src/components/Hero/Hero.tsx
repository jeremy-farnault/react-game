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
  selected: boolean
}

class Hero extends React.PureComponent<IProps, {}> {

  public render() {
    return (
      <HeroStyled
        onClick={this.selectHero}
        selected={this.props.heroSelected}
        posX={this.props.tile.posX + (constants.tileWithBorder - this.props.hero.assets.battlefieldPath.width) / 2}
        posY={this.props.tile.posY - 4}
        src={this.props.hero.assets.battlefieldPath.path}
        height={50}/>
    );
  }

  private selectHero = () => {
    this.props.selectHero(this.props.hero)
  }
}

export default Hero;
