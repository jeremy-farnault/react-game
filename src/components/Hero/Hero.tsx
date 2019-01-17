import {
  HeroShadowColors,
  IHeroBattlefield,
  IHeroBattlefieldState,
  ITile
} from "../../core/models";
import { constants } from "../../utils/constants";
import { HeroStyled } from "./HeroStyles";

import * as React from "react";

interface IProps {
  hero: IHeroBattlefield
  heroes: IHeroBattlefield[]
  heroState: IHeroBattlefieldState
  heroSelected: boolean
  selectHero: (hero: IHeroBattlefield) => void
  tile: ITile
  setNewActionPointsValue: (hero: IHeroBattlefield, pointLabel: string, newValue: number) => void
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
        shadowColor={HeroShadowColors[this.props.heroState]}
        posX={this.props.tile.posX + (constants.tileSize - h.assets.battlefieldPath.width) / 2}
        posY={this.props.tile.posY - 4}
        src={h.assets.battlefieldPath.path}
        height={50}/>
    );
  }

  private selectHero = () => {
    switch (this.props.hero.state) {
      case IHeroBattlefieldState.attacked:
        const h = this.props.hero
        const newValue = h.points.currentLifePoints - (this.props.heroes[0].characteristics.attack - h.characteristics.armor)
        this.props.setNewActionPointsValue(this.props.hero, 'currentLifePoints', newValue);
        break;
      case IHeroBattlefieldState.attackedRanged:

        this.props.selectHero(this.props.hero);

        break;
      case IHeroBattlefieldState.attackedArmor:

        this.props.selectHero(this.props.hero);

        break;
      case IHeroBattlefieldState.attackedMagic:

        this.props.selectHero(this.props.hero);

        break;
      case IHeroBattlefieldState.defending:
        break;
      default:
        this.props.selectHero(this.props.hero);
        break;
    }
  };
}

export default Hero;
