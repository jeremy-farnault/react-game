import * as actions from "../../core/actions";
import { ICard, ICardsBattlefield, IHeroBattlefield, UIAssets } from "../../core/models";
import { colors } from "../../utils/colors";
import Card from "../Card/Card";
import CastButton from "../CastButton/CastButton";
import { DrawButton, Images, TextButton } from "./ModalCardsStyles";

import * as React from "react";
import * as Modal from "react-modal";


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
    backgroundColor: colors.blackLowOpacity
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: colors.blackHighOpacity,
    paddingLeft: 150,
    paddingRight: 150,
    paddingTop: 100,
    paddingBottom: 50,
    borderSize: 4,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: colors.yellow,
    justifyContent: "center",
    alignItems: "center"
  }
};


const maxHandSize = 6;

class ModalCards extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      currentHand: this.props.cardsFight[this.props.heroes[0].playerId].currentHand
    };
  }

  public componentWillReceiveProps(nextProps: IProps) {
    this.setState({
      currentHand: nextProps.cardsFight[nextProps.heroes[0].playerId].currentHand
    });
  }

  public render() {
    const disabled = this.state.currentHand.length === maxHandSize ||
      this.props.currentActionPoints < 1;
    return (
      <Modal
        style={customStyles}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.closeModal}>
        <CastButton disabled={disabled}
                    playCard={this.playCard}/>
        {this.state.currentHand.map((c: ICard, ind: number) => {
            return <Card
              key={c.id + ind} card={c} heroes={this.props.heroes}
              currentHand={this.state.currentHand} index={ind}
            />;
          }
        )}
        <DrawButton disabled={disabled} onClick={this.drawCard} style={{position: 'relative'}}>
          <Images src={UIAssets.drawButton.path} width={UIAssets.drawButton.width}/>
          <Images src={UIAssets.drawButton.pathFrame} width={UIAssets.drawButton.width + 4}/>
          <TextButton>Draw</TextButton>
        </DrawButton>
      </Modal>
    );
  }

  private drawCard = () => {
    if (this.state.currentHand.length === maxHandSize ||
        this.props.currentActionPoints < 1) {
      return;
    }
    this.props.decrementActionPoints();
    this.props.drawCard({ playerId: this.props.heroes[0].playerId });
  };

  private playCard = (card: ICard) => {
    if (this.props.currentActionPoints < 1) {
      return
    }
    this.props.decrementActionPoints();
    this.props.playCard({
      playerId: this.props.heroes[0].playerId,
      card
    });
  };
}

export default ModalCards;
