import { ActionsType, IHeroBattlefield, UIAssets } from "../../core/models";
import ActionButtons from "../ActionButtons/ActionButtons";
import DetailsCurrentHero from "../DetailsCurrentHero/DetailsCurrentHero";

import * as React from "react";

interface IProps {
  changeAction: (action: ActionsType) => void
  heroesSorted: IHeroBattlefield[]
  selectedAction: ActionsType
}

// interface IState {}

class ActionsAndDetails extends React.PureComponent<IProps, {}> {

  public render() {
    return (
      <div style={{ position: "relative", display: "flex", flexDirection: "row" }}>
        <img src={UIAssets.actionAndDetailsBackground.path} height={UIAssets.actionAndDetailsBackground.height}/>
        <div style={{position: 'absolute'}}>
          <ActionButtons
            hero={this.props.heroesSorted[0]}
            currentActionPoints={this.props.heroesSorted[0].currentActionPoints}
            currentAction={this.props.selectedAction}
            changeAction={this.props.changeAction}/>
          <DetailsCurrentHero heroesSorted={this.props.heroesSorted}/>
        </div>
      </div>
    );
  }
}

export default ActionsAndDetails;
