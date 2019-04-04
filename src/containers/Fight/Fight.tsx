import ActionPoints from "../../components/ActionPoints/ActionPoints";
import PointsZone from "../../components/PointsZone/PointsZone";
import * as actions from "../../core/actions";
import {
  ActionCharacteristic,
  ActionsType,
  ICards,
  ICardsBattlefield,
  IHeroBattlefield,
  ITile,
  TileState
} from "../../core/models";
import { IStoreState } from "../../types";
import { constants } from "../../utils/constants";
import { getNewHeroStatus, getNewTileStateByHeroStatus } from "../../utils/tilesHelpers";
import Battlefield from "../Battlefield/Battlefield";
import { BattlefieldScene, ContainerScene, LeftSection, RightSection } from "./FightStyles";

import * as _ from "lodash";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import IPlayers = IStoreState.IPlayers;
import Timer from "../../components/Timer/Timer";

interface IProps {
  tiles: ITile[][]
  cards: ICards
  players: IPlayers
  heroesFight: IHeroBattlefield[]
  cardsFight: ICardsBattlefield
  setHeroSelected: typeof actions.setHeroSelected
  updateTiles: typeof actions.updateTiles
  updateHeroesState: typeof actions.updateHeroState
  resetTiles: typeof actions.resetTiles
  setHeroesOrder: typeof actions.setHeroesOrder
  setNextCurrentHero: typeof actions.setNextCurrentHero
  decrementActionPoints: typeof actions.decrementActionPoints
  resetActionPoints: typeof actions.resetActionPoints
  resetHeroesState: typeof actions.resetHeroesState
  initializeDeckHand: typeof actions.initializeDeckHand
  drawCard: typeof actions.drawCard
  playCard: typeof actions.playCard
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
      currentSelectedHero: this.props.heroesFight[0],
      currentSelectedAction: ActionsType.heroAttack,
      allHeroes: this.getAllHeroesPlayers()
    };
  }

  public componentDidMount() {
    this.props.initializeDeckHand();
    const sorted = _.reverse(_.sortBy(this.state.allHeroes, [
      (h: IHeroBattlefield) => h.characteristics.initiative,
      (h: IHeroBattlefield) => h.characteristics.speed,
      () => Math.random()
    ]));
    this.props.setHeroesOrder({ allHeroesPlayers: sorted });
    this.props.setHeroSelected({
      setSelected: true,
      heroId: sorted[0].id,
      playerId: sorted[0].playerId
    });
    this.changeAction(ActionsType.heroMovement, undefined, sorted[0]);
  }

  public render() {
    const action = this.state.currentSelectedAction;
    const heroes = this.props.heroesFight;
    return (
      <ContainerScene>
        {heroes.length > 0 &&
        <div>
          <div>
            <BattlefieldScene>
              <LeftSection>
                <PointsZone
                  player={Object.keys(this.props.players)[0]}
                  heroes={heroes}
                  isCurrentPlayer={Object.keys(this.props.players)[0] === heroes[0].playerId}/>
              </LeftSection>
              <div style={{ display: "flex", justifyContent: "flex", flexDirection: "column", alignItems: "center" }}>
                <Timer hero={heroes[0]} minutesTurn={constants.minutesTurn} secondsTurn={constants.secondsTurn}
                       nextHero={this.props.setNextCurrentHero}/>
                <Battlefield
                  currentHero={heroes[0]}
                  allHeroes={heroes}
                  currentSelectedAction={action}
                  currentSelectedHero={heroes[0]}
                  updateSelectedAction={this.updateSelectedAction}
                  updateSelectedHero={this.updateSelectedHero}
                  changeAction={this.changeAction}
                  decrementActionPoints={this.props.decrementActionPoints}/>
              </div>
              <RightSection>
                <PointsZone
                  player={Object.keys(this.props.players)[1]}
                  heroes={heroes}
                  isCurrentPlayer={Object.keys(this.props.players)[1] === heroes[0].playerId}/>
              </RightSection>
            </BattlefieldScene>
          </div>
          <ActionPoints currentHero={heroes[0]}/>
        </div>}
      </ContainerScene>
    );
  }

  // private decrementActionPoints = () => {
  //   this.props.decrementActionPoints({
  //     playerId: this.props.heroesFight[0].playerId,
  //     heroId: this.props.heroesFight[0].id,
  //     heroIndex: 0
  //   });
  // };

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

  private changeAction = async (action: ActionsType, tile?: ITile, hero?: IHeroBattlefield) => {
    await this.props.resetHeroesState({});
    await this.props.resetTiles({});
    if (this.props.heroesFight.length > 0 && this.props.heroesFight[0].currentActionPoints < 1) {
      return;
    }
    this.setState({ currentSelectedAction: action });
    const usedHero = !!hero ? hero : this.props.heroesFight[0];
    const usedTile = !!tile ? tile : this.props.tiles[usedHero.tileY][usedHero.tileX];
    const newTiles = getNewTileStateByHeroStatus(this.props.tiles, usedHero.characteristics[ActionCharacteristic[action]],
      usedTile.columnIndex, usedTile.lineIndex, TileState[action]);
    const newStateHeroes = getNewHeroStatus(this.props.tiles, usedHero.characteristics[ActionCharacteristic[action]],
      usedTile.columnIndex, usedTile.lineIndex, TileState[action], this.props.heroesFight);
    this.props.updateHeroesState(newStateHeroes);
    this.props.updateTiles({ data: newTiles });
  };

  // private setNextCurrentHero = async () => {
  //   await this.props.resetHeroesState({});
  //   await this.props.resetTiles({});
  //   this.props.resetActionPoints({
  //     playerId: this.props.heroesFight[0].playerId,
  //     heroId: this.props.heroesFight[0].id,
  //     heroIndex: 0
  //   });
  //   const hero = this.props.heroesFight[1];
  //   this.props.setNextCurrentHero();
  //   this.updateSelectedAction(ActionsType.heroMovement);
  //   this.props.setHeroSelected({
  //     setSelected: true,
  //     heroId: hero.id,
  //     playerId: hero.playerId
  //   });
  //   const newTiles = getNewTileStateByHeroStatus(this.props.tiles, hero.characteristics.speed,
  //     hero.tileX, hero.tileY, TileState.heroMovement);
  //   this.props.updateTiles({ data: newTiles });
  // };
}

function mapStateToProps(state: IStoreState.IRootState) {
  return {
    tiles: state.battlefield.tiles,
    cards: state.session.allCards,
    players: state.session.players,
    heroesFight: state.session.heroesFight,
    cardsFight: state.session.cardsFight
  };
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    setHeroSelected: actions.setHeroSelected,
    updateTiles: actions.updateTiles,
    updateHeroesState: actions.updateHeroState,
    resetTiles: actions.resetTiles,
    setHeroesOrder: actions.setHeroesOrder,
    setNextCurrentHero: actions.setNextCurrentHero,
    decrementActionPoints: actions.decrementActionPoints,
    resetActionPoints: actions.resetActionPoints,
    resetHeroesState: actions.resetHeroesState,
    initializeDeckHand: actions.initializeDeckHand,
    drawCard: actions.drawCard,
    playCard: actions.playCard
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fight);


{/*<BackgroundImage*/
}
{/*  src={require("../../assets/HumbleBundle/GUI/Fantasy_GUI/bg.png")}/>*/
}
{/*{heroes.length > 0 &&*/
}
{/*<div>*/
}
{/*  <BattlefieldScene>*/
}
{/*    <LeftSection>*/
}
{/*      <PointsZone*/
}
{/*        player={Object.keys(this.props.players)[0]}*/
}
{/*        heroes={heroes}*/
}
{/*        isCurrentPlayer={Object.keys(this.props.players)[0] === heroes[0].playerId}/>*/
}
{/*      <ActionPoints currentHero={heroes[0]}/>*/
}
{/*    </LeftSection>*/
}
{/*    <Battlefield*/
}
{/*      currentHero={heroes[0]}*/
}
{/*      allHeroes={heroes}*/
}
{/*      currentSelectedAction={action}*/
}
{/*      currentSelectedHero={heroes[0]}*/
}
{/*      updateSelectedAction={this.updateSelectedAction}*/
}
{/*      updateSelectedHero={this.updateSelectedHero}*/
}
{/*      changeAction={this.changeAction}*/
}
{/*      decrementActionPoints={this.props.decrementActionPoints}/>*/
}
{/*    <RightSection>*/
}
{/*      <PointsZone*/
}
{/*        player={Object.keys(this.props.players)[1]}*/
}
{/*        heroes={heroes}*/
}
{/*        isCurrentPlayer={Object.keys(this.props.players)[1] === heroes[0].playerId}/>*/
}
{/*    </RightSection>*/
}
{/*  </BattlefieldScene>*/
}
{/*  <BottomSection*/
}
{/*    heroesSorted={heroes}*/
}
{/*    selectedHero={hero}*/
}
{/*    setNextCurrentHero={this.setNextCurrentHero}*/
}
{/*    updateSelectedHero={this.updateSelectedHero}*/
}
{/*    changeAction={this.changeAction}*/
}
{/*    cardsFight={this.props.cardsFight}*/
}
{/*    drawCard={this.props.drawCard}*/
}
{/*    playCard={this.props.playCard}*/
}
{/*    decrementActionPoints={this.decrementActionPoints}*/
}
{/*    selectedAction={action}/>*/
}
{/*</div>}*/
}
