import { IHeroBattlefield } from "../../core/models";
import { Portrait } from "./InitiativeHeroPortraitStyles";

import * as React from "react";

interface IProps {
  hero: IHeroBattlefield
  src: string
  dataTip: string
  width: number
  height: number
  updateSelectedHero: (hero: IHeroBattlefield | null) => void
}

// interface IState {}

class InitiativeHeroPortrait extends React.PureComponent<IProps, {}> {

  public render() {
    return (
      <Portrait src={this.props.src}
                data-place='top'
                onClick={this.selectHero}
                data-tip={this.props.dataTip}
                width={this.props.width}
                height={this.props.height}/>
    );
  }

  private selectHero = () => {
    this.props.updateSelectedHero(this.props.hero);
  };
}

export default InitiativeHeroPortrait;
