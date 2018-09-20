import { IHeroBattlefield, ITile } from "../../core/models";
import { constants } from "../../utils/constants";
import { ButtonActionStyled, HeroStyled } from "./HeroStyles";

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
    const h = this.props.hero;
    return (
      <div>
        <HeroStyled
          onClick={this.selectHero}
          selected={h.selected}
          posX={this.props.tile.posX + (constants.tileSize - h.assets.battlefieldPath.width) / 2}
          posY={this.props.tile.posY - 4}
          src={h.assets.battlefieldPath.path}
          height={50}/>
        {h.selected &&
        <div style={{position: 'absolute', top: this.props.tile.posY - 4, left: this.props.tile.posX + (constants.tileSize - h.assets.battlefieldPath.width) / 2 - 20}}>

          // todo map over magic, attack, ranged and movement if charac value is more than 0
          <ButtonActionStyled/>

        </div>}
      </div>
    );
  }

  private selectHero = () => {
    this.props.selectHero(this.props.hero);
  };
}

export default Hero;
