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

class ActionButtons extends React.PureComponent<IProps, {}> {

  public render() {
    const h = this.props.hero as IHeroBattlefield;
    const mvt = h.characteristics.speed > 0;
    const atk = h.characteristics.attack > 0;
    const rAtk = h.characteristics.rangedAttack > 0;
    const mgc = h.characteristics.magic > 0;
    const def = h.characteristics.armor > 0;
    const atkArm = h.characteristics.attackArmor > 0;
    return (
      <ActionZoneStyled>
        <ReactTooltip type='light' effect='solid' multiline={true}/>
        {mvt &&
        <ActionButton actionType={ActionsType.heroMovement}
                      selected={this.props.currentAction === ActionsType.heroMovement}
                      disabled={this.props.currentActionPoints < 1}
                      changeAction={this.changeAction}/>}
        {atk &&
        <ActionButton actionType={ActionsType.heroAttack}
                      selected={this.props.currentAction === ActionsType.heroAttack}
                      disabled={this.props.currentActionPoints < 1}
                      changeAction={this.changeAction}/>}
        {rAtk &&
        <ActionButton actionType={ActionsType.heroRangedAttack}
                      selected={this.props.currentAction === ActionsType.heroRangedAttack}
                      disabled={this.props.currentActionPoints < 1}
                      changeAction={this.changeAction}/>}
        {atkArm &&
        <ActionButton actionType={ActionsType.heroAttackArmor}
                      selected={this.props.currentAction === ActionsType.heroAttackArmor}
                      disabled={this.props.currentActionPoints < 1}
                      changeAction={this.changeAction}/>}
        {mgc &&
        <ActionButton actionType={ActionsType.heroMagic}
                      selected={this.props.currentAction === ActionsType.heroMagic}
                      disabled={this.props.currentActionPoints < 1}
                      changeAction={this.changeAction}/>}
        {def &&
        <ActionButton actionType={ActionsType.heroDefense}
                      selected={this.props.currentAction === ActionsType.heroDefense}
                      disabled={this.props.currentActionPoints < 1}
                      changeAction={this.changeAction}/>}
      </ActionZoneStyled>
    );
  }

  private changeAction = (action: ActionsType) => {
    this.props.changeAction(action);
  };
}

export default ActionButtons;
