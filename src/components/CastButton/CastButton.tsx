import { CastButtonDiv } from "./CastButtonStyles";

import * as React from "react";
import { DropTarget } from 'react-dnd';

interface IProps {
  disabled: boolean
}

// interface IState {}

const roundTarget = {
  canDrop(props: any) {
    console.log('CAN DROP', props)
    return true
    // return canMoveCard(props.x, props.y)
  },

  drop(props: any) {
    console.log('ROUND TARGET', props)
    // moveCard(props.x, props.y)
  }
}

const collect = (connect: any, monitor: any) => {
  console.log('COLLECT CAST', connect, monitor)
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

class CastButton extends React.PureComponent<IProps, {}> {

  public render() {
    return (
      <CastButtonDiv disabled={this.props.disabled}>
        <div>Cast</div>
      </CastButtonDiv>
    );
  }
}

export default DropTarget('CARD', roundTarget, collect)(CastButton);
