import * as actions from "../../core/actions";
import { ActionsType, ICardsBattlefield, IHeroBattlefield, VariousAssets } from "../../core/models";
import InitiativeAndDetails from "../InitiativeAndDetails/InitiativeAndDetails";
import { BottomSectionContainer, DeckImage } from "./BottomSectionStyles";

import * as React from "react";
import ModalCards from "../ModalCards/ModalCards";

interface IProps {
  cardsFight: ICardsBattlefield
  changeAction: (action: ActionsType) => void
  currentAction: ActionsType
  currentSelectedHero: IHeroBattlefield | null
  decrementActionPoints: () => void
  drawCard: typeof actions.drawCard
  heroesSorted: IHeroBattlefield[]
  playCard: typeof actions.playCard
  selectedAction: ActionsType
  setNextCurrentHero: () => void
  updateSelectedHero: (hero: IHeroBattlefield | null) => void
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
    const hero = heroes[0]
    return (
      <BottomSectionContainer>
        <InitiativeAndDetails heroesSorted={heroes} changeAction={this.props.changeAction}
                              currentActionPoints={hero.currentActionPoints} hero={hero}
                              updateSelectedHero={this.props.updateSelectedHero}
                              currentAction={this.props.selectedAction}
                              currentSelectedHero={this.props.currentSelectedHero}
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
