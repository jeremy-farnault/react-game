import InitiativeZone from "../../containers/InitiativeZone/InitiativeZone";
import { IHeroBattlefield } from "../../core/models";
import { DetailsAndInitiativeContainer, DetailsAndInitiativeZone } from "./InitiativeAndDetailsStyles";

import * as React from "react";
import ReactTooltip = require("react-tooltip");

interface IProps {
  heroesSorted: IHeroBattlefield[]
  setNextCurrentHero: () => void
  updateSelectedHero: (hero: IHeroBattlefield | null) => void
}

// interface IState {}

class InitiativeAndDetails extends React.PureComponent<IProps, {}> {

  public render() {
    const heroes = this.props.heroesSorted;
    return <DetailsAndInitiativeContainer>
      <ReactTooltip type='light' effect='solid' multiline={true}/>
      <DetailsAndInitiativeZone>
        <InitiativeZone heroesSorted={heroes} setNextCurrentHero={this.props.setNextCurrentHero}
                        updateSelectedHero={this.props.updateSelectedHero}/>
      </DetailsAndInitiativeZone>
    </DetailsAndInitiativeContainer>;
  }
}

export default InitiativeAndDetails;
