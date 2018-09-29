import { ActionsType, IHeroBattlefield, ITile } from "../../core/models";
import { constants } from "../../utils/constants";
import { HeroStyled } from "./HeroStyles";

import * as React from "react";
import ActionButtons from "../ActionButtons/ActionButtons";

interface IProps {
  changeAction: (action: ActionsType, tile: ITile) => void
  hero: IHeroBattlefield
  currentAction: ActionsType
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
    return (
      <div>
        <HeroStyled
          onClick={this.selectHero}
          posX={this.props.tile.posX + (constants.tileSize - h.assets.battlefieldPath.width) / 2}
          posY={this.props.tile.posY - 4}
          src={h.assets.battlefieldPath.path}
          height={50}/>
        {h.selected &&
          <ActionButtons
            hero={h}
            currentAction={this.props.currentAction}
            changeAction={this.props.changeAction}
            tile={this.props.tile}/>}
      </div>
    );
  }

  private selectHero = () => {
    this.props.selectHero(this.props.hero);
  };
}

export default Hero;
