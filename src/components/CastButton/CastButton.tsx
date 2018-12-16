import { CastButtonDiv } from "./CastButtonStyles";

import * as React from "react";
import { DropTarget } from 'react-dnd';

interface IProps {
  disabled: boolean
}

// interface IState {}

class CastButton extends React.PureComponent<IProps, {}> {

  public render() {
    return (
      <CastButtonDiv disabled={this.props.disabled}>
        <div>Cast</div>
      </CastButtonDiv>
    );
  }
}

export default CastButton;
