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
    backgroundColor: "black",
    padding: 20,
    borderSize: 2,
    borderStyle: "solid",
    borderColor: colors.paleYellow
  }
};

class ModalCards extends React.PureComponent<IProps, {}> {

  public render() {
    const heroes = this.props.heroes
    const cardsCurrentHero = this.props.cardsFight[heroes[0].playerId].currentHand
    return (
      <div>
        <Modal
          style={customStyles}
          isOpen={this.props.isOpen}
          onRequestClose={this.props.closeModal}>
          {cardsCurrentHero.map((c: ICard) =>
            <CardImage key={c.id + heroes[1].playerId} src={c.assets.normalPath} height={250}/>
          )}
          <div style={{color: 'white'}}>DRAW</div>
          <div style={{color: 'white'}}>PLAY</div>
        </Modal>
      </div>
    );
  }
}

export default ModalCards;
