import { CastButtonDiv } from "./CastButtonStyles";

import * as React from "react";
import { ConnectDropTarget, DropTarget, DropTargetCollector, DropTargetConnector, DropTargetMonitor } from "react-dnd";

interface IProps {
  disabled: boolean
}

interface ICollectedProps {
  isOver: boolean
  canDrop: boolean
  connectDropTarget: ConnectDropTarget
}

// interface IState {}

const roundTarget = {
  canDrop(props: IProps) {
    console.log("CAN DROP");
    return true;
    // return canMoveCard(props.x, props.y)
  },

  drop(props: IProps) {
    console.log("DROP");
    return true;
    // moveCard(props.x, props.y)
  }
};

const collect: DropTargetCollector<ICollectedProps> =
  (connect: DropTargetConnector, monitor: DropTargetMonitor) => {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    };
  };

class CastButton extends React.PureComponent<IProps & ICollectedProps, {}> {

  public render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <CastButtonDiv disabled={this.props.disabled}>
        <div>Cast</div>
      </CastButtonDiv>
    );
  }
}

export default DropTarget("CARD", roundTarget, collect)(CastButton);
