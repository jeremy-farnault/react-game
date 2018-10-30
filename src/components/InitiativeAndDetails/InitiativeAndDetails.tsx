import InitiativeZone from "../../containers/InitiativeZone/InitiativeZone";
import { IHeroBattlefield } from "../../core/models";
import DetailsCurrentHero from "../DetailsCurrentHero/DetailsCurrentHero";
import SelectedHeroDetailsZone from "../SelectedHeroDetailsZone/SelectedHeroDetailsZone";
import { DetailsAndInitiativeContainer, DetailsAndInitiativeZone } from "./InitiativeAndDetailsStyles";

import * as React from "react";
import ReactTooltip = require("react-tooltip");

interface IProps {
  heroesSorted: IHeroBattlefield[]
  selectedHero: IHeroBattlefield | null
}

// interface IState {}

class InitiativeAndDetails extends React.PureComponent<IProps, {}> {

  public render() {
    const heroes = this.props.heroesSorted
    const hero = this.props.selectedHero
    return <DetailsAndInitiativeContainer>
      <ReactTooltip type='light' effect='solid' multiline={true}/>
      <DetailsCurrentHero heroesSorted={heroes}/>
      <DetailsAndInitiativeZone>
        {!!hero && <SelectedHeroDetailsZone selectedHero={hero} heroesSorted={heroes}/>}
        <InitiativeZone heroesSorted={heroes}/>
      </DetailsAndInitiativeZone>
    </DetailsAndInitiativeContainer>;
  }
}

export default InitiativeAndDetails;
