import InitiativeZone from "../../containers/InitiativeZone/InitiativeZone";
import { ActionsType, IHeroBattlefield } from "../../core/models";
import { DetailsAndInitiativeContainer } from "./InitiativeAndDetailsStyles";

import * as React from "react";
import ActionButtons from "../ActionButtons/ActionButtons";

interface IProps {
  changeAction: (action: ActionsType) => void
  currentAction: ActionsType
  currentActionPoints: number
  hero: IHeroBattlefield | null
  heroesSorted: IHeroBattlefield[]
  setNextCurrentHero: () => void
  updateSelectedHero: (hero: IHeroBattlefield | null) => void
}

// interface IState {}

class InitiativeAndDetails extends React.PureComponent<IProps, {}> {

  public render() {
    const heroes = this.props.heroesSorted;
    return (
      <DetailsAndInitiativeContainer>
        <ActionButtons changeAction={this.props.changeAction} hero={this.props.hero}
                       currentAction={this.props.currentAction} currentActionPoints={this.props.currentActionPoints}/>
        <InitiativeZone heroesSorted={heroes} setNextCurrentHero={this.props.setNextCurrentHero}
                        updateSelectedHero={this.props.updateSelectedHero}/>
      </DetailsAndInitiativeContainer>
    );
  }
}

export default InitiativeAndDetails;
