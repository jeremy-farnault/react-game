import * as actions from "../../core/actions";
import { ActionsType, ICard, ICardsBattlefield, IHeroBattlefield, VariousAssets } from "../../core/models";
import { colors } from "../../utils/colors";
import ActionButtons from "../ActionButtons/ActionButtons";
import InitiativeAndDetails from "../InitiativeAndDetails/InitiativeAndDetails";
import Timer from "../Timer/Timer";
import { BottomSectionContainer, DeckImage, LeftSection, RightSection } from "./BottomSectionStyles";

import * as React from "react";
import * as Modal from "react-modal";

interface IProps {
  heroesSorted: IHeroBattlefield[]
  selectedHero: IHeroBattlefield | null
  setNextCurrentHero: () => void
  updateSelectedHero: (hero: IHeroBattlefield | null) => void
  selectedAction: ActionsType
  changeAction: (action: ActionsType) => void
  cardsFight: ICardsBattlefield
  drawCard: typeof actions.drawCard
  playCard: typeof actions.playCard
}

interface IState {
  modalOpen: boolean
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
    backgroundColor: "black",
    padding: 20,
    borderSize: 2,
    borderStyle: "solid",
    borderColor: colors.paleYellow
  }
};

class BottomSection extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }


  public render() {
    const heroes = this.props.heroesSorted;
    const hero = this.props.selectedHero;
    const action = this.props.selectedAction;
    const cardsCurrentHero = this.props.cardsFight[heroes[0].playerId].currentHand
    console.log(cardsCurrentHero)
    return (
      <BottomSectionContainer>
        <LeftSection>
          <ActionButtons
            hero={heroes[0]}
            currentActionPoints={heroes[0].currentActionPoints}
            currentAction={action}
            changeAction={this.props.changeAction}/>
          <InitiativeAndDetails heroesSorted={heroes}
                                updateSelectedHero={this.props.updateSelectedHero}
                                setNextCurrentHero={this.props.setNextCurrentHero}
                                selectedHero={hero}/>
        </LeftSection>
        <RightSection>
          <Timer hero={heroes[0]} minutesTurn={1} secondsTurn={0}
                 nextHero={this.props.setNextCurrentHero}/>
          <DeckImage src={VariousAssets.cardBack.path} onClick={this.openModal}/>
        </RightSection>



        <Modal
          style={customStyles}
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>

          {cardsCurrentHero.map((c: ICard) =>
            <img key={c.id + heroes[0].playerId} src={c.assets.normalPath} height={250}/>
          )}


          <div style={{color: 'white'}}>DRAW</div>
          <div style={{color: 'white'}}>PLAY</div>
        </Modal>



      </BottomSectionContainer>
    );
  }

  private openModal = () => {
    this.setState({ modalOpen: true });
  };

  private closeModal = () => {
    this.setState({ modalOpen: false });
  };
}

export default BottomSection;
