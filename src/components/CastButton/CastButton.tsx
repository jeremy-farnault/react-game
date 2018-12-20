import { ICard } from "../../core/models";
import { CastButtonDiv } from "./CastButtonStyles";

import * as React from "react";
import { ConnectDropTarget, DropTarget, DropTargetCollector, DropTargetConnector, DropTargetMonitor } from "react-dnd";

interface IProps {
  disabled: boolean
  playCard: (card: ICard) => void
}

interface ICollectedProps {
  isOver: boolean
  canDrop: boolean
  dropped: any
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
  },

  drop(props: IProps, monitor: DropTargetMonitor) {
    return monitor.getItem();
  }
};

const collect: DropTargetCollector<ICollectedProps> =
  (connect: DropTargetConnector, monitor: DropTargetMonitor) => {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      dropped: monitor.getDropResult()
    };
  };

class CastButton extends React.PureComponent<IProps & ICollectedProps, {}> {

  public render() {
    const { connectDropTarget } = this.props;
    this.checkDroppedCard()
    return connectDropTarget(
      <div>
        <CastButtonDiv disabled={this.props.disabled}
                       isOver={this.props.isOver}>
          <div>Cast</div>
        </CastButtonDiv>
      </div>
    );
  }

  private checkDroppedCard = () => {
    if (!!this.props.dropped) {
      this.props.playCard(this.props.dropped)
    }
  }
}

export default DropTarget("CARD", roundTarget, collect)(CastButton);
