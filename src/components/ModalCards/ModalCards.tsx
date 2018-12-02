import * as actions from "../../core/actions";
import { ICard, ICardsBattlefield, IHeroBattlefield } from "../../core/models";
import { colors } from "../../utils/colors";
import { CardImage } from "./ModalCardsStyles";

import * as React from "react";
import * as Modal from "react-modal";

interface IProps {
  closeModal: () => void
  isOpen: boolean
  heroes: IHeroBattlefield[]
  cardsFight: ICardsBattlefield
  drawCard: typeof actions.drawCard
  playCard: typeof actions.playCard
}

// interface IState {}

const customStyles = {
  overlay: {
    zIndex: 10,
    backgroundColor: colors.blackMediumOpacity
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: colors.blackMediumOpacity,
    paddingLeft: 150,
    paddingRight: 150,
    paddingTop: 100,
    paddingBottom: 50,
    borderSize: 2,
    borderStyle: "solid",
    borderColor: colors.grey
  }
};

export interface ICardImageProps {
  transform: string
}

class ModalCards extends React.PureComponent<IProps, {}> {

  public render() {
    const heroes = this.props.heroes;
    console.log(this.props.cardsFight, heroes[0].playerId, this.props.cardsFight[heroes[0].playerId])
    const cardsCurrentHero = this.props.cardsFight[heroes[0].playerId].currentHand;
    const transforms = this.getTransform();
    return (
      <div>
        <Modal
          style={customStyles}
          isOpen={this.props.isOpen}
          onRequestClose={this.props.closeModal}>
          {cardsCurrentHero.map((c: ICard, ind: number) => {
              return <CardImage
                key={c.id + heroes[1].playerId}
                // onClick={this.playCard}
                src={c.assets.normalPath}
                transform={transforms[cardsCurrentHero.length][ind]}/>;
            }
          )}
          <div style={{ color: "white" }} onClick={this.drawCard}>DRAW</div>
        </Modal>
      </div>
    );
  }

  private drawCard = () => {
    this.props.drawCard({playerId: this.props.heroes[0].playerId})
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

export default ModalCards;
