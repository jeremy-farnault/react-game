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
import { BackgroundImage, BattlefieldScene, ContainerScene} from "./FightStyles";

import * as _ from "lodash";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import IPlayers = IStoreState.IPlayers;
import InitiativeAndDetails from "../../components/InitiativeAndDetails/InitiativeAndDetails";

interface IProps {
  tiles: ITile[][]
  heroes: IHeroes
  cards: ICards
  players: IPlayers
  heroesSorted: IHeroBattlefield[]
  updateTiles: typeof actions.updateTiles
  resetTiles: typeof actions.resetTiles
  setHeroesOrder: typeof actions.setHeroesOrder
  setNextCurrentHero: typeof actions.setNextCurrentHero
}

interface IState {
  currentSelectedHero: IHeroBattlefield | null
  currentSelectedAction: ActionsType
  allHeroes: IHeroBattlefield[]
}

class Fight extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      currentSelectedHero: null,
      currentSelectedAction: ActionsType.heroMovement,
      allHeroes: this.getAllHeroesPlayers()
    };
  }

  public componentDidMount() {
    const sorted = _.reverse(_.sortBy(this.state.allHeroes, [
      (h: IHeroBattlefield) => h.characteristics.initiative,
      (h: IHeroBattlefield) => h.characteristics.speed,
      () => Math.random()
    ]));
    this.props.setHeroesOrder({ allHeroesPlayers: sorted });
  }

  public render() {
    const hero = this.state.currentSelectedHero;
    const action = this.state.currentSelectedAction;
    const heroes = this.props.heroesSorted;
    return (
      <ContainerScene>
        <BackgroundImage
          src={require("../../assets/backgrounds/battlefield_big.jpg")}/>
        <BattlefieldScene>
          <ActionButtons
            hero={hero}
            currentAction={action}
            changeAction={this.changeAction}/>
          <Battlefield
            allHeroes={this.state.allHeroes}
            currentSelectedAction={action}
            currentSelectedHero={hero}
            updateSelectedAction={this.updateSelectedAction}
            updateSelectedHero={this.updateSelectedHero}
            changeAction={this.changeAction}/>
        </BattlefieldScene>
        {heroes.length > 0 && <InitiativeAndDetails heroesSorted={heroes} selectedHero={hero}/>}
      </ContainerScene>
    );
  }

  private getAllHeroesPlayers = () => {
    return _.flatten(Object.keys(this.props.players)
      .map((playerId: string) => Object.keys(this.props.players[playerId].heroes)
        .map((heroId: string) => this.props.players[playerId].heroes[heroId])));
  };

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
    this.setState({ currentSelectedAction: action });
    this.props.resetTiles({});
    const hero = this.state.currentSelectedHero as IHeroBattlefield;
    const usedTile = !!tile ? tile : this.props.tiles[hero.tileY][hero.tileX];
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
    players: state.session.players,
    heroesSorted: state.session.heroesOrder
  };
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    updateTiles: actions.updateTiles,
    resetTiles: actions.resetTiles,
    setHeroesOrder: actions.setHeroesOrder,
    setNextCurrentHero: actions.setNextCurrentHero
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fight);

