import ActionButtons from "../../components/ActionButtons/ActionButtons";
import * as actions from "../../core/actions";
import {
  ActionCharacteristic,
  ActionsType,
  ICards,
  IHeroBattlefield,
  IHeroes,
  ITile,
  TileState
} from "../../core/models";
import { IStoreState } from "../../types";
import { getNewTileStateByHeroStatus } from "../../utils/tilesHelpers";

import Battlefield from "../Battlefield/Battlefield";
import { BackgroundImage, ContainerScene } from "./FightStyles";

import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import IPlayers = IStoreState.IPlayers;

interface IProps {
  tiles: ITile[][]
  heroes: IHeroes
  cards: ICards
  players: IPlayers
  updateTiles: typeof actions.updateTiles
  resetTiles: typeof actions.resetTiles
}

interface IState {
  currentSelectedHero: IHeroBattlefield | null
  currentSelectedAction: ActionsType
}

class Fight extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      currentSelectedHero: null,
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
          <ActionButtons
            hero={this.state.currentSelectedHero}
            currentAction={this.state.currentSelectedAction}
            changeAction={this.changeAction}/>
          <Battlefield
            currentSelectedAction={this.state.currentSelectedAction}
            currentSelectedHero={this.state.currentSelectedHero}
            updateSelectedAction={this.updateSelectedAction}
            updateSelectedHero={this.updateSelectedHero}
            changeAction={this.changeAction}/>
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

  private changeAction = (action: ActionsType, tile?: ITile) => {
    if (this.state.currentSelectedAction === action) {
      return;
    }
    this.setState({currentSelectedAction: action});
    this.props.resetTiles({});
    const hero = this.state.currentSelectedHero as IHeroBattlefield;
    const usedTile = !!tile ? tile : this.props.tiles[hero.tileY][hero.tileX]
    const newTiles = getNewTileStateByHeroStatus(this.props.tiles, hero.characteristics[ActionCharacteristic[action]],
      usedTile.columnIndex, usedTile.lineIndex, TileState[action]);
    this.props.updateTiles({ data: newTiles });
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
  bindActionCreators({
    updateTiles: actions.updateTiles,
    resetTiles: actions.resetTiles
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fight);

