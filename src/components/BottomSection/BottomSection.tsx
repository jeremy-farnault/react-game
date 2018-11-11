import { ActionsType, IHeroBattlefield } from "../../core/models";
import ActionButtons from "../ActionButtons/ActionButtons";
import InitiativeAndDetails from "../InitiativeAndDetails/InitiativeAndDetails";
import Timer from "../Timer/Timer";
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
    const action = this.props.selectedAction;
    return (
      <BottomSectionContainer>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <ActionButtons
            hero={heroes[0]}
            currentActionPoints={heroes[0].currentActionPoints}
            currentAction={action}
            changeAction={this.props.changeAction}/>
          <InitiativeAndDetails heroesSorted={heroes}
                                updateSelectedHero={this.props.updateSelectedHero}
                                setNextCurrentHero={this.props.setNextCurrentHero}
                                selectedHero={hero}/>
        </div>
        <div style={{marginRight: 55}}>
          <Timer minutesTurn={1} secondsTurn={0} nextHero={this.props.setNextCurrentHero}/>
        </div>
      </BottomSectionContainer>
    );
  }
}

export default BottomSection;
