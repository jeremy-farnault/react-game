import { ActionButtonIcon, ActionsType} from "../../core/models";
import { constants } from "../../utils/constants";
import { ButtonActionStyled } from "./ActionButtonStyles";

import * as React from "react";

interface IProps {
  actionType: ActionsType
  selected: boolean
  changeAction: (action: ActionsType) => void
}

// interface IState {}

export interface IStyledActionButton {
  selected: boolean
}

class ActionButton extends React.PureComponent<IProps, {}> {

  public render() {
    return (
      <ButtonActionStyled
        selected={this.props.selected}
        onClick={this.pressActionButton}>
        <img src={ActionButtonIcon[ActionsType[this.props.actionType]]}
             height={constants.buttonActionSize}
             width={constants.buttonActionSize}/>
      </ButtonActionStyled>
    );
  }

  private pressActionButton = () => {

    this.props.changeAction(this.props.actionType)

  }
}

export default ActionButton;
