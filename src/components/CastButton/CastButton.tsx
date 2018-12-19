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

export interface ICastButtonDivProps {
  disabled: boolean
  isOver: boolean
}

const roundTarget = {
  canDrop(props: IProps) {
    return true;
    // return canMoveCard(props.x, props.y)
  },

  drop(props: IProps) {
    return undefined;
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
      <div>
        <CastButtonDiv disabled={this.props.disabled}
                       isOver={this.props.isOver}>
          <div>Cast</div>
        </CastButtonDiv>
      </div>
    );
  }
}

export default DropTarget("CARD", roundTarget, collect)(CastButton);
