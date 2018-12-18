import { ICard, IHeroBattlefield } from "../../core/models";
import { CardImage } from "./CardStyles";

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
  playCard: (id: string, card: ICard) => void
}

interface ICollectedProps {
  connectDragSource: ConnectDragSource
  connectDragPreview: ConnectDragPreview
  isDragging?: boolean
}

// interface IState {}

export interface ICardImageProps {
  transform: string
}

const cardSource = {
  beginDrag(props: any) {
    return {};
  }
};

const collect: DragSourceCollector<ICollectedProps> = (connect: DragSourceConnector,
                                              monitor: DragSourceMonitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
});

class Card extends React.PureComponent<IProps & ICollectedProps, {}> {

  public render() {
    const transforms = this.getTransform();
    const c = this.props.card;
    const heroes = this.props.heroes;
    const hand = this.props.currentHand;
    const ind = this.props.index;
    const { connectDragSource } = this.props;
    return connectDragSource(
      <CardImage
        key={c.id + heroes[0].playerId}
        onClick={this.playCard}
        src={c.assets.normalPath}
        transform={transforms[hand.length][ind]}/>
    );
  }

  private playCard = () => {
    this.props.playCard(this.props.heroes[0].playerId, this.props.card);
  };

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
