import { IHeroBattlefield, ITile } from "../../core/models";
import { constants } from "../../utils/constants";
import { HeroStyled } from "./HeroStyles";

import * as React from "react";

interface IProps {
  hero: IHeroBattlefield
  selectHero: (hero: IHeroBattlefield) => void
  tile: ITile
}

interface IState {
  hero: IHeroBattlefield
  tile: ITile
}

export interface IStyledHero {
  posX: number
  posY: number
  selected: boolean
}

class Hero extends React.PureComponent<IProps, IState> {

  // Change the state. Hero state and hero props are always the same so no rerender

  constructor(props: IProps) {
    super(props)
    this.state = {
      hero: {} as IHeroBattlefield,
      tile: {} as ITile
    }
  }

  public componentWillReceiveProps(props: IProps) {
    console.log('componentWillReceiveProps')
    console.log(props, this.props)
    this.setState({
      hero: props.hero,
      tile: props.tile
    })
  }

  public render() {
    console.log('hero renderer', this.props.hero)
    return (
      <HeroStyled
        onClick={this.selectHero}
        selected={this.props.hero.selected}
        posX={this.props.tile.posX + (constants.tileWithBorder - this.props.hero.assets.battlefieldPath.width) / 2}
        posY={this.props.tile.posY - 4}
        src={this.props.hero.assets.battlefieldPath.path}
        height={50}/>
    );
  }

  private selectHero = () => {
    console.log('selectHero', this.props.hero)
    this.props.selectHero(this.props.hero)
  }
}

export default Hero;
