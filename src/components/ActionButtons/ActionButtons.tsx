import { ActionsType, IHeroBattlefield, ITile } from "../../core/models";
import { constants } from "../../utils/constants";
import ActionButton from "../ActionButton/ActionButton";

import * as React from "react";
import { ButtonsActionStyled } from "./ActionButtonsStyles";

interface IProps {
  hero: IHeroBattlefield
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
        {mvt && <ActionButton actionType={ActionsType.movement}/>}
        {atk && <ActionButton actionType={ActionsType.attack}/>}
        {rAtk && <ActionButton actionType={ActionsType.rangedAttack}/>}
        {atkArm && <ActionButton actionType={ActionsType.attackArmor}/>}
        {mgc && <ActionButton actionType={ActionsType.magic}/>}
        {def && <ActionButton actionType={ActionsType.defense}/>}
      </ButtonsActionStyled>
    );
  }
}

export default ActionButtons;
