import { IHeroBattlefield, UIAssets } from "../../core/models";
import {
  BackgroundDetailsHero,
  DetailsHero,
  InitiativeAndDetailsContainer,
  Portrait
} from "./InitiativeHeroPortraitStyles";

import * as React from "react";
import DetailsSelectedHero from "../DetailsSelectedHero/DetailsSelectedHero";

interface IProps {
  dataTip: string
  height: number
  hero: IHeroBattlefield
  isCurrentHero: boolean
  isSelected: boolean
  positionDetails: number
  src: string
  updateSelectedHero: (hero: IHeroBattlefield | null) => void
  width: number
}

// interface IState {}

class InitiativeHeroPortrait extends React.PureComponent<IProps, {}> {

  public render() {
    return (
      <InitiativeAndDetailsContainer>
        {this.props.isSelected &&
        <DetailsHero top={this.props.positionDetails}>
          <BackgroundDetailsHero src={UIAssets.detailsBackground.path}
                                 width={this.props.width * 2.5}/>
          <DetailsSelectedHero selectedHero={this.props.hero}
                               isCurrentHero={this.props.isCurrentHero}/>
        </DetailsHero>}
        <Portrait src={this.props.src}
                  data-place='top'
                  onClick={this.selectHero}
                  data-tip={this.props.dataTip}
                  width={this.props.width}
                  height={this.props.height}/>
      </InitiativeAndDetailsContainer>
    );
  }

  private selectHero = () => {
    this.props.updateSelectedHero(this.props.hero);
  };
}

export default InitiativeHeroPortrait;
