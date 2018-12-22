import { ICard, IHeroBattlefield } from "../../core/models";

import * as React from "react";
import {
  ConnectDragPreview,
  ConnectDragSource,
  DragSource,
  DragSourceCollector,
  DragSourceConnector,
  DragSourceMonitor
} from "react-dnd";


interface IProps {
  card: ICard
  heroes: IHeroBattlefield[]
  currentHand: ICard[]
  index: number
}

interface ICollectedProps {
  connectDragSource: ConnectDragSource
  connectDragPreview: ConnectDragPreview
  isDragging?: boolean
}

interface IState {
  focused: boolean
}

export interface ICardImageProps {
  transform: string
}

const cardSource = {
  beginDrag(props: IProps) {
    return props.card;
  },

  endDrag(props: IProps) {
    return props.card
  }
};

const collect: DragSourceCollector<ICollectedProps> = (connect: DragSourceConnector,
                                                       monitor: DragSourceMonitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
});

class Card extends React.PureComponent<IProps & ICollectedProps, IState> {

  constructor(props: IProps & ICollectedProps) {
    super(props)
    this.state = {
      focused: false
    }
  }

  public render() {
    const transforms = this.getTransform();
    const c = this.props.card;
    const heroes = this.props.heroes;
    const hand = this.props.currentHand;
    const ind = this.props.index;
    const { connectDragSource } = this.props;
    return connectDragSource(
      <img
        key={c.id + heroes[0].playerId}
        src={c.assets.normalPath}
        onMouseEnter={this.cardFocus}
        onMouseLeave={this.cardFocus}
        style={{
          transform: this.state.focused ?
            'scale(0.8) translateY(-25%)' :
            transforms[hand.length][ind],
          margin: '0 -13vh',
          opacity: this.props.isDragging ? 0.1 : 1,
          background: '#776557',
          transition: 'transform 0.15s',
          position: 'relative',
          width: '35vh',
          height: '47vh',
          boxShadow: '0 0 20px rgba(0,0,0,0.3)',
          borderRadius: 8,
          transformOrigin: 'center bottom',
          cursor: 'pointer',
          zIndex: 1
        }}/>
    );
  }

  private cardFocus = () => {
    this.setState({focused: !this.state.focused})
  }

  private fixCardAlignment = (total: number, current: number) => {
    const half = total / 2;
    if (current < half) {
      return `${-30 + -7 * (current + 1)}%`;
    } else {
      return `${-40 + -7 * ((total - 1) - current)}%`;
    }
  };

  private curve = (total: number, current: number, range: number) => {
    const base = -range / 2;
    const modifier = (total - 1 === 0) ? 0 : current / (total - 1);
    return base + (range * modifier);
  };

  private getTransform = () => {
    const res = [];
    for (let i = 0; i < 10; i++) {
      const midRes = [];
      const range = 50 * (i / 10);
      for (let j = 0; j <= i; j++) {
        midRes.push(`scale(0.4) rotate(${this.curve(i, j, range)}deg) translateY(${this.fixCardAlignment(i, j)})`);
      }
      res.push(midRes);
    }
    return res;
  };
}

export default DragSource("CARD", cardSource, collect)(Card);
