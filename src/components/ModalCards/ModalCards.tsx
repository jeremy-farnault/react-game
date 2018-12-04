import * as actions from "../../core/actions";
import { ICard, ICardsBattlefield, IHeroBattlefield } from "../../core/models";
import { colors } from "../../utils/colors";
import { CardImage, DrawButton } from "./ModalCardsStyles";

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

interface IState {
  currentHand: ICard[]
}

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
    paddingTop: 30,
    paddingBottom: 50,
    borderSize: 2,
    borderStyle: "solid",
    borderColor: colors.grey,
    justifyContent: "center",
    alignItems: "center"
  }
};

export interface ICardImageProps {
  transform: string
}

const maxHandSize = 6;

class ModalCards extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {
      currentHand: this.props.cardsFight[this.props.heroes[0].playerId].currentHand
    }
  }

  public componentWillReceiveProps(nextProps: IProps) {
    console.log('WILL RECEIVE')
    this.setState({
      currentHand: nextProps.cardsFight[nextProps.heroes[0].playerId].currentHand
    })
  }

  public render() {
    const heroes = this.props.heroes;
    const transforms = this.getTransform();
    const disabled = this.state.currentHand.length === maxHandSize;
    console.log('RENDER')
    return (
      <div>
        <Modal
          style={customStyles}
          isOpen={this.props.isOpen}
          onRequestClose={this.props.closeModal}>
          {this.state.currentHand.map((c: ICard, ind: number) => {
              return <CardImage
                key={c.id + heroes[1].playerId}
                // onClick={this.playCard}
                src={c.assets.normalPath}
                transform={transforms[this.state.currentHand.length][ind]}/>;
            }
          )}
          <DrawButton onClick={this.drawCard} disabled={disabled}>
            Draw
          </DrawButton>
        </Modal>
      </div>
    );
  }

  private drawCard = () => {
    if (this.state.currentHand.length === maxHandSize) {
      return;
    }
    this.props.drawCard({ playerId: this.props.heroes[0].playerId });
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

export default ModalCards;
