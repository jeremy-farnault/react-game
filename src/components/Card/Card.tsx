import { ICard, IHeroBattlefield } from "../../core/models";
import { CardImage } from "./CardStyles";

import * as React from "react";
import { DragSource } from 'react-dnd';


interface IProps {
  card: ICard
  heroes: IHeroBattlefield[]
  currentHand: ICard[]
  index: number
}

// interface IState {}

export interface ICardImageProps {
  transform: string
}

const cardSource = {
  beginDrag(props: any) {
    console.log('CARD SOURCE', props)
    return {}
  }
}

const collect = (connect: any, monitor: any) => {
  console.log('COLLECT', connect, monitor)
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Card extends React.PureComponent<IProps, {}> {

  public render() {
    const transforms = this.getTransform();
    const c = this.props.card
    const heroes = this.props.heroes;
    const hand = this.props.currentHand
    const ind = this.props.index
    return (
      <CardImage
        key={c.id + heroes[1].playerId}
        // onClick={this.playCard}
        src={c.assets.normalPath}
        transform={transforms[hand.length][ind]}/>
  )}

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

export default DragSource('CARD', cardSource, collect)(Card);
