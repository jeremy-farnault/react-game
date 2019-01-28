import { HeroShadowColors, IHeroBattlefield, IHeroBattlefieldState, ITile, TileState } from "../../core/models";
import { INewTile } from "../../core/reducers/battlefield";
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
  updateTiles: (newTiles: INewTile[]) => void
}

// interface IState {}

export interface IStyledHero {
  posX: number
  posY: number
  shadowColor: string
  isDead: boolean
}

class Hero extends React.PureComponent<IProps, {}> {

  public render() {
    const h = this.props.hero;
    const isDead = h.points.currentLifePoints <= 0
    return (
      <HeroStyled
        onClick={this.selectHero}
        shadowColor={HeroShadowColors[this.props.heroState]}
        posX={this.props.tile.posX + (constants.tileSize - h.assets.battlefieldPath.width) / 2}
        posY={this.props.tile.posY - 4}
        src={h.assets.battlefieldPath.path} // Add the isDead path if/when available
        isDead={isDead}
        height={50}/>
    );
  }

  private selectHero = () => {
    switch (this.props.hero.state) {
      case IHeroBattlefieldState.attacked:
        const h = this.props.hero;
        const newValue = h.points.currentLifePoints - (this.props.heroes[0].characteristics.attack - h.characteristics.armor);
        this.props.setNewActionPointsValue(this.props.hero, "currentLifePoints", newValue);
        if (newValue <= 0) {
          this.props.updateTiles([{
            tileState: TileState.heroDead,
            tileX: h.tileX,
            tileY: h.tileY
          }]);
        }
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
      case IHeroBattlefieldState.dead:
        return;
      default:
        this.props.selectHero(this.props.hero);
        break;
    }
  };
}

export default Hero;
