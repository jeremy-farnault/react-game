import { ActionButtonIcon, ActionsType, ActionsTypeText, UIAssets } from "../../core/models";
import { constants } from "../../utils/constants";
import {
  ButtonActionImagesStyled,
  ButtonActionImageStyled, ButtonActionSelectedBackground,
  ButtonActionStyled
} from "./ActionButtonStyles";

import * as React from "react";

interface IProps {
  actionType: ActionsType
  selected: boolean
  changeAction: (action: ActionsType) => void
  disabled: boolean
  position: { h: number, v: number }
}

// interface IState {}

export interface IStyledActionButton {
  position: { h: number, v: number }
}

export interface IStyledActionImages {
  selected: boolean
  disabled: boolean
}

class ActionButton extends React.PureComponent<IProps, {}> {

  public render() {
    return (
      <ButtonActionStyled
        position={this.props.position}
        onClick={this.pressActionButton}>
        <ButtonActionImagesStyled
          data-place="left"
          data-tip={ActionsTypeText[this.props.actionType]}
          selected={this.props.selected}
          disabled={this.props.disabled}>
          {this.props.selected &&
          <ButtonActionSelectedBackground style={{ position: "absolute", top: 0, left: 0 }}
                                          src={UIAssets.actionButtonSelectedBackground.path}
                                          height={UIAssets.actionButtonSelectedBackground.height}/>}
          <img src={UIAssets.actionButtonBackground.path} height={UIAssets.actionButtonBackground.height}/>
          <ButtonActionImageStyled src={ActionButtonIcon[ActionsType[this.props.actionType]]}
                                   height={constants.buttonActionSize}/>
        </ButtonActionImagesStyled>
      </ButtonActionStyled>
    );
  }

  private pressActionButton = () => {
    this.props.changeAction(this.props.actionType);
  };
}

export default ActionButton;
