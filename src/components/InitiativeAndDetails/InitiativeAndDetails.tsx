import InitiativeZone from "../../containers/InitiativeZone/InitiativeZone";
import { IHeroBattlefield } from "../../core/models";
import SelectedHeroDetailsZone from "../SelectedHeroDetailsZone/SelectedHeroDetailsZone";
import { DetailsAndInitiativeContainer, DetailsAndInitiativeZone } from "./InitiativeAndDetailsStyles";

import * as React from "react";
import DetailsCurrentHero from "../DetailsCurrentHero/DetailsCurrentHero";

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
      <DetailsCurrentHero heroesSorted={heroes}/>
      <DetailsAndInitiativeZone>
        {!!hero && <SelectedHeroDetailsZone selectedHero={hero} heroesSorted={heroes}/>}
        <InitiativeZone heroesSorted={heroes}/>
      </DetailsAndInitiativeZone>
    </DetailsAndInitiativeContainer>;
  }
}

export default InitiativeAndDetails;
