import { ActionButtonIcon, ActionsType, ActionsTypeText, UIAssets } from "../../core/models";
import { constants } from "../../utils/constants";
import { ButtonActionImageStyled, ButtonActionStyled } from "./ActionButtonStyles";

import * as React from "react";

interface IProps {
  actionType: ActionsType
  selected: boolean
  changeAction: (action: ActionsType) => void
  disabled: boolean
}

// interface IState {}

export interface IStyledActionButton {
  selected: boolean
  disabled: boolean
}

class ActionButton extends React.PureComponent<IProps, {}> {

  public render() {
    return (
      <ButtonActionStyled
        data-place="left"
        data-tip={ActionsTypeText[this.props.actionType]}
        selected={this.props.selected}
        disabled={this.props.disabled}
        onClick={this.pressActionButton}>
        {this.props.selected &&
        <img src={UIAssets.actionButtonBackground.path} height={UIAssets.actionButtonBackground.height}/>}
        <ButtonActionImageStyled src={ActionButtonIcon[ActionsType[this.props.actionType]]}
                                 height={constants.buttonActionSize}/>
      </ButtonActionStyled>
    );
  }

  private pressActionButton = () => {
    this.props.changeAction(this.props.actionType);
  };
}

export default ActionButton;
