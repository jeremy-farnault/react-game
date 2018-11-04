import { ActionsType, IHeroBattlefield } from "../../core/models";
import ActionButtons from "../ActionButtons/ActionButtons";
import InitiativeAndDetails from "../InitiativeAndDetails/InitiativeAndDetails";
import { BottomSectionContainer } from "./BottomSectionStyles";

import * as React from "react";

interface IProps {
  heroesSorted: IHeroBattlefield[]
  selectedHero: IHeroBattlefield | null
  setNextCurrentHero: () => void
  updateSelectedHero: (hero: IHeroBattlefield | null) => void
  selectedAction: ActionsType
  changeAction: (action: ActionsType) => void
}

// interface IState {}

class BottomSection extends React.PureComponent<IProps, {}> {

  public render() {
    const heroes = this.props.heroesSorted;
    const hero = this.props.selectedHero;
    const action = this.props.selectedAction
    return (
      <BottomSectionContainer>
        <ActionButtons
          hero={heroes[0]}
          currentAction={action}
          changeAction={this.props.changeAction}/>
        <InitiativeAndDetails heroesSorted={heroes}
                              updateSelectedHero={this.props.updateSelectedHero}
                              setNextCurrentHero={this.props.setNextCurrentHero}
                              selectedHero={hero}/>
      </BottomSectionContainer>
    );
  }
}

export default BottomSection;
