import * as actions from "../../core/actions";
import { ActionsType, ICardsBattlefield, IHeroBattlefield, VariousAssets } from "../../core/models";
import InitiativeAndDetails from "../InitiativeAndDetails/InitiativeAndDetails";
import { BottomSectionContainer, DeckImage } from "./BottomSectionStyles";

import * as React from "react";
import ModalCards from "../ModalCards/ModalCards";

interface IProps {
  heroesSorted: IHeroBattlefield[]
  setNextCurrentHero: () => void
  updateSelectedHero: (hero: IHeroBattlefield | null) => void
  selectedAction: ActionsType
  changeAction: (action: ActionsType) => void
  cardsFight: ICardsBattlefield
  decrementActionPoints: () => void
  drawCard: typeof actions.drawCard
  playCard: typeof actions.playCard
}

interface IState {
  modalOpen: boolean
}

class BottomSection extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  public render() {
    const heroes = this.props.heroesSorted;
    return (
      <BottomSectionContainer>
        <InitiativeAndDetails heroesSorted={heroes}
                              updateSelectedHero={this.props.updateSelectedHero}
                              setNextCurrentHero={this.props.setNextCurrentHero}/>
        <DeckImage src={VariousAssets.cardBack.path} onClick={this.openModal}/>
        <ModalCards isOpen={this.state.modalOpen}
                    heroes={heroes}
                    drawCard={this.props.drawCard}
                    playCard={this.props.playCard}
                    currentActionPoints={heroes[0].currentActionPoints}
                    decrementActionPoints={this.props.decrementActionPoints}
                    cardsFight={this.props.cardsFight}
                    closeModal={this.closeModal}/>
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
