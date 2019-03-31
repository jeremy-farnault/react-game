import * as actions from "../../core/actions";
import { ActionsType, ICardsBattlefield, IHeroBattlefield, VariousAssets } from "../../core/models";
import ActionsAndDetails from "../ActionsAndDetails/ActionsAndDetails";
import InitiativeAndDetails from "../InitiativeAndDetails/InitiativeAndDetails";
import Timer from "../Timer/Timer";
import { BottomSectionContainer, DeckImage, LeftSection, RightSection } from "./BottomSectionStyles";

import * as React from "react";
import ModalCards from "../ModalCards/ModalCards";

interface IProps {
  heroesSorted: IHeroBattlefield[]
  selectedHero: IHeroBattlefield | null
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
    const hero = this.props.selectedHero;
    const action = this.props.selectedAction;
    return (
      <BottomSectionContainer>
        <LeftSection>
          <ActionsAndDetails heroesSorted={heroes} selectedHero={hero}
                             changeAction={this.props.changeAction}
                             selectedAction={action}/>
          <InitiativeAndDetails heroesSorted={heroes}
                                updateSelectedHero={this.props.updateSelectedHero}
                                setNextCurrentHero={this.props.setNextCurrentHero}/>
        </LeftSection>
        <RightSection>
          <Timer hero={heroes[0]} minutesTurn={1} secondsTurn={0}
                 nextHero={this.props.setNextCurrentHero}/>
          <DeckImage src={VariousAssets.cardBack.path} onClick={this.openModal}/>
        </RightSection>
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
