import { ActionButtonIcon, ActionsType } from "../../core/models";
import { constants } from "../../utils/constants";
import { ButtonActionStyled } from "./ActionButtonStyles";

import * as React from "react";

interface IProps {
  actionType: ActionsType
}

// interface IState {}

class ActionButton extends React.PureComponent<IProps, {}> {

  public render() {
    return (
      <ButtonActionStyled>
        <img src={ActionButtonIcon[ActionsType[this.props.actionType]]} height={constants.buttonActionSize} width={constants.buttonActionSize}/>
      </ButtonActionStyled>
    );
  }
}

export default ActionButton;
