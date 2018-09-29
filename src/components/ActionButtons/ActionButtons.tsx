import { ActionsType, IHeroBattlefield, ITile } from "../../core/models";
import { constants } from "../../utils/constants";
import ActionButton from "../ActionButton/ActionButton";

import * as React from "react";
import { ButtonsActionStyled } from "./ActionButtonsStyles";

interface IProps {
  changeAction: (action: ActionsType, tile: ITile) => void
  hero: IHeroBattlefield
  currentAction: ActionsType
  tile: ITile
}

// interface IState {}

export interface IStyledActionButtons {
  top: number
  left: number
}

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
    const heightActionZone = (constants.buttonActionSize + 5) *
      ((mvt ? 1 : 0) + (atk ? 1 : 0) + (rAtk ? 1 : 0) + (mgc ? 1 : 0) + (atkArm ? 1 : 0) + (def ? 1 : 0)) + 10;
    return (
      <ButtonsActionStyled
        top={this.props.tile.posY + (constants.tileSize - heightActionZone) / 2}
        left={this.props.tile.posX + (constants.tileSize - h.assets.battlefieldPath.width) / 2 - 20}>
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
      </ButtonsActionStyled>
    );
  }

  private changeAction = (action: ActionsType) => {
    this.props.changeAction(action, this.props.tile)
  }
}

export default ActionButtons;
