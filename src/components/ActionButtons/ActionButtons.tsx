import { ActionsType, IHeroBattlefield } from "../../core/models";
import ActionButton from "../ActionButton/ActionButton";

import * as React from "react";

interface IProps {
  changeAction: (action: ActionsType) => void
  hero: IHeroBattlefield
  currentAction: ActionsType
}

// interface IState {}

class ActionButtons extends React.PureComponent<IProps, {}> {

  public render() {
    const h = this.props.hero;
    const mvt = h.characteristics.speed > 0;
    const atk = h.characteristics.attack > 0;
    const rAtk = h.characteristics.rangedAttack > 0;
    const mgc = h.characteristics.magic > 0;
    const def = h.characteristics.armor > 0;
    const atkArm = h.characteristics.attackArmor > 0;
    // Get height with margins
    return (
      <div>
        {mvt &&
        <ActionButton actionType={ActionsType.heroMovement}
                      selected={this.props.currentAction === ActionsType.heroMovement}
                      changeAction={this.changeAction}/>}
        {atk &&
        <ActionButton actionType={ActionsType.heroAttack}
                      selected={this.props.currentAction === ActionsType.heroAttack}
                      changeAction={this.changeAction}/>}
        {rAtk &&
        <ActionButton actionType={ActionsType.heroRangedAttack}
                      selected={this.props.currentAction === ActionsType.heroRangedAttack}
                      changeAction={this.changeAction}/>}
        {atkArm &&
        <ActionButton actionType={ActionsType.heroAttackArmor}
                      selected={this.props.currentAction === ActionsType.heroAttackArmor}
                      changeAction={this.changeAction}/>}
        {mgc &&
        <ActionButton actionType={ActionsType.heroMagic}
                      selected={this.props.currentAction === ActionsType.heroMagic}
                      changeAction={this.changeAction}/>}
        {def &&
        <ActionButton actionType={ActionsType.heroDefense}
                      selected={this.props.currentAction === ActionsType.heroDefense}
                      changeAction={this.changeAction}/>}
      </div>
    );
  }

  private changeAction = (action: ActionsType) => {
    this.props.changeAction(action)
  }
}

export default ActionButtons;
