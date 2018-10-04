import { ActionsType, ICards, IHeroBattlefield, IHeroes, ITile } from "../../core/models";
import { IStoreState } from "../../types";
import Battlefield from "../Battlefield/Battlefield";
import { BackgroundImage, ContainerScene } from "./FightStyles";

import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import IPlayers = IStoreState.IPlayers;
import ActionButtons from "../../components/ActionButtons/ActionButtons";

interface IProps {
  tiles: ITile[][]
  heroes: IHeroes
  cards: ICards
  players: IPlayers
}

interface IState {
  currentSelectedHero: IHeroBattlefield | null
  currentSelectedAction: ActionsType
}

class Fight extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      currentSelectedHero: {} as IHeroBattlefield,
      currentSelectedAction: ActionsType.heroMovement
    };
  }

  public render() {
    return (
      <ContainerScene>
        <BackgroundImage
          style={{ position: "absolute", top: -300, left: 0 }}
          src={require("../../assets/backgrounds/battlefield_big.jpg")}/>
        <div style={{ flexDirection: "row", display: "flex" }}>
          {this.state.currentSelectedHero && <ActionButtons
            hero={this.state.currentSelectedHero}
            currentAction={this.state.currentSelectedAction}
            changeAction={this.changeSelectedAction}/>}
          <Battlefield
            currentSelectedAction={this.state.currentSelectedAction}
            currentSelectedHero={this.state.currentSelectedHero}
            updateSelectedAction={this.updateSelectedAction}
            updateSelectedHero={this.updateSelectedHero}/>
        </div>
      </ContainerScene>
    );
  }

  private updateSelectedAction = (action: ActionsType) => {
    this.setState({ currentSelectedAction: action });
  };

  private updateSelectedHero = (hero: IHeroBattlefield | null) => {
    this.setState({ currentSelectedHero: hero });
  };

}

function mapStateToProps(state: IStoreState.IRootState) {
  return {
    tiles: state.battlefield.tiles,
    heroes: state.session.allHeroes,
    cards: state.session.allCards,
    players: state.session.players
  };
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fight);

