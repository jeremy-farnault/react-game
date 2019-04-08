import { IHeroBattlefield, UIAssets } from "../../core/models";
import { DetailsHero, InitiativeAndDetailsContainer, Portrait } from "./InitiativeHeroPortraitStyles";

import * as React from "react";

interface IProps {
  dataTip: string
  height: number
  hero: IHeroBattlefield
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
        {this.props.isSelected && <DetailsHero src={UIAssets.detailsBackground.path}
                                               width={this.props.width * 2.5}
                                               top={this.props.positionDetails}/>}
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
