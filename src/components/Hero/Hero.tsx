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
}

class Hero extends React.PureComponent<IProps, {}> {

  public render() {
    const h = this.props.hero;
    const atk = h.characteristics.attack > 0
    const rAtk = h.characteristics.rangedAttack > 0
    const mgc = h.characteristics.magic > 0

    const heightActionZone = constants.buttonActionSize * (1 + (atk ? 1 : 0) + (rAtk ? 1 : 0) + (mgc ? 1 : 0))

    return (
      <div>
        <HeroStyled
          onClick={this.selectHero}
          posX={this.props.tile.posX + (constants.tileSize - h.assets.battlefieldPath.width) / 2}
          posY={this.props.tile.posY - 4}
          src={h.assets.battlefieldPath.path}
          height={50}/>


        {h.selected &&
        <div style={{position: 'absolute',
          top: this.props.tile.posY - 2 + (constants.tileSize - heightActionZone) / 2,
          left: this.props.tile.posX + (constants.tileSize - h.assets.battlefieldPath.width) / 2 - 20}}>
          <ButtonActionStyled/>
          {atk && <ButtonActionStyled/>}
          {rAtk && <ButtonActionStyled/>}
          {mgc && <ButtonActionStyled/>}


        </div>}
      </div>
    );
  }

  private selectHero = () => {
    this.props.selectHero(this.props.hero);
  };
}

export default Hero;
