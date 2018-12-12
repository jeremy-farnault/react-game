import * as actions from "../../core/actions";
import { ICard, ICardsBattlefield, IHeroBattlefield } from "../../core/models";
import { colors } from "../../utils/colors";
import { CastButton, DrawButton } from "./ModalCardsStyles";

import * as React from "react";
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import * as Modal from "react-modal";
import Card from "../Card/Card";


interface IProps {
  closeModal: () => void
  isOpen: boolean
  heroes: IHeroBattlefield[]
  cardsFight: ICardsBattlefield
  drawCard: typeof actions.drawCard
  playCard: typeof actions.playCard
  decrementActionPoints: () => void
  currentActionPoints: number
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
    paddingTop: 100,
    paddingBottom: 50,
    borderSize: 2,
    borderStyle: "solid",
    borderColor: colors.grey,
    justifyContent: "center",
    alignItems: "center"
  }
};


const maxHandSize = 6;

class ModalCards extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {
      currentHand: this.props.cardsFight[this.props.heroes[0].playerId].currentHand
    }
  }

  public componentWillReceiveProps(nextProps: IProps) {
    this.setState({
      currentHand: nextProps.cardsFight[nextProps.heroes[0].playerId].currentHand
    })
  }

  public render() {
    const disabled = this.state.currentHand.length === maxHandSize ||
      this.props.currentActionPoints < 1;
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <Modal
          style={customStyles}
          isOpen={this.props.isOpen}
          onRequestClose={this.props.closeModal}>
          <CastButton disabled={disabled}>
            <div>Cast</div>
          </CastButton>
          {this.state.currentHand.map((c: ICard, ind: number) => {
              return <Card
                key={c.id + ind} card={c} heroes={this.props.heroes}
                currentHand={this.state.currentHand} index={ind}
                playCard={this.playCard}
              />;
            }
          )}
          <DrawButton onClick={this.drawCard} disabled={disabled}>
            Draw
          </DrawButton>
        </Modal>
      </DragDropContextProvider>
    );
  }

  private drawCard = () => {
    if (this.state.currentHand.length === maxHandSize) {
      return;
    }
    this.props.decrementActionPoints()
    this.props.drawCard({ playerId: this.props.heroes[0].playerId });
  };

  private playCard = (playerId: string, card: ICard) => {
    this.props.decrementActionPoints()
    this.props.playCard({
      playerId,
      card
    })
  }
}

export default ModalCards;
