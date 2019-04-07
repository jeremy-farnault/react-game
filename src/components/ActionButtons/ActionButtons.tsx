import { ActionsType, IHeroBattlefield } from "../../core/models";
import ActionButton from "../ActionButton/ActionButton";
import { ActionZoneStyled } from "./ActionButtonsStyles";

import * as React from "react";
import ReactTooltip = require("react-tooltip");

interface IProps {
  changeAction: (action: ActionsType) => void
  hero: IHeroBattlefield | null
  currentAction: ActionsType
  currentActionPoints: number
}

// interface IState {}

const positions = [{h: 90, v: -20}, {h: 20, v: -20}, {h: -20, v: 20}, {h: -20, v: 90}, {h: 20, v: 130}]

class ActionButtons extends React.PureComponent<IProps, {}> {

  public render() {
    const h = this.props.hero as IHeroBattlefield;
    const actions = [];
    if (h.characteristics.speed > 0) {
      actions.push(ActionsType.heroMovement);
    }
    if (h.characteristics.attack > 0) {
      actions.push(ActionsType.heroAttack);
    }
    if (h.characteristics.rangedAttack > 0) {
      actions.push(ActionsType.heroRangedAttack);
    }
    if (h.characteristics.magic > 0) {
      actions.push(ActionsType.heroAttackArmor);
    }
    if (h.characteristics.armor > 0) {
      actions.push(ActionsType.heroMagic);
    }
    if (h.characteristics.attackArmor > 0) {
      actions.push(ActionsType.heroDefense);
    }
    return (
      <ActionZoneStyled>
        <ReactTooltip type='light' effect='solid' multiline={true}/>
        {actions.map((a, i) =>
          <ActionButton key={a} actionType={a} selected={this.props.currentAction === a}
                        position={positions[i]} disabled={this.props.currentActionPoints < 1}
                        changeAction={this.changeAction}/>
        )}
      </ActionZoneStyled>
    );
  }

  private changeAction = (action: ActionsType) => {
    this.props.changeAction(action);
  };
}

export default ActionButtons;
