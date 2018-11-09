import BottomSection from "../../components/BottomSection/BottomSection";
import * as actions from "../../core/actions";
import {
  ActionCharacteristic,
  ActionsType,
  ICards,
  IHeroBattlefield,
  ITile,
  TileState
} from "../../core/models";
import { IStoreState } from "../../types";
import { getNewTileStateByHeroStatus } from "../../utils/tilesHelpers";
import Battlefield from "../Battlefield/Battlefield";
import { BackgroundImage, BattlefieldScene, ContainerScene } from "./FightStyles";

import * as _ from "lodash";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import IPlayers = IStoreState.IPlayers;
import ActionPoints from "../../components/ActionPoints/ActionPoints";

interface IProps {
  tiles: ITile[][]
  cards: ICards
  players: IPlayers
  heroesFight: IHeroBattlefield[]
  setHeroSelected: typeof actions.setHeroSelected
  updateTiles: typeof actions.updateTiles
  resetTiles: typeof actions.resetTiles
  setHeroesOrder: typeof actions.setHeroesOrder
  setNextCurrentHero: typeof actions.setNextCurrentHero
  decrementActionPoints: typeof actions.decrementActionPoints
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
    const sorted = _.reverse(_.sortBy(this.state.allHeroes, [
      (h: IHeroBattlefield) => h.characteristics.initiative,
      (h: IHeroBattlefield) => h.characteristics.speed,
      () => Math.random()
    ]));
    this.props.setHeroesOrder({ allHeroesPlayers: sorted });
    this.changeAction(ActionsType.heroMovement, undefined, sorted[0])
  }

  public render() {
    const hero = this.state.currentSelectedHero;
    const action = this.state.currentSelectedAction;
    const heroes = this.props.heroesFight;
    console.log('fight render')
    return (
      <ContainerScene>
        <BackgroundImage
          src={require("../../assets/backgrounds/battlefield_big.jpg")}/>
        {heroes.length > 0 &&
        <div>
          <BattlefieldScene>
            <ActionPoints currentHero={heroes[0]}/>
            <Battlefield
              allHeroes={this.state.allHeroes}
              currentSelectedAction={action}
              currentSelectedHero={heroes[0]}
              updateSelectedAction={this.updateSelectedAction}
              updateSelectedHero={this.updateSelectedHero}
              changeAction={this.changeAction}
              decrementActionPoints={this.props.decrementActionPoints}/>
          </BattlefieldScene>
          <BottomSection
            heroesSorted={heroes}
            selectedHero={hero}
            setNextCurrentHero={this.setNextCurrentHero}
            updateSelectedHero={this.updateSelectedHero}
            changeAction={this.changeAction}
            selectedAction={action}/>
        </div>}
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

  private changeAction = (action: ActionsType, tile?: ITile, hero?: IHeroBattlefield) => {
    if (this.props.heroesFight.length > 0 && this.props.heroesFight[0].currentActionPoints < 1) {
      return;
    }
    this.setState({ currentSelectedAction: action });
    this.props.resetTiles({});
    const usedHero = !!hero ? hero : this.props.heroesFight[0];
    const usedTile = !!tile ? tile : this.props.tiles[usedHero.tileY][usedHero.tileX];
    const newTiles = getNewTileStateByHeroStatus(this.props.tiles, usedHero.characteristics[ActionCharacteristic[action]],
      usedTile.columnIndex, usedTile.lineIndex, TileState[action]);
    this.props.updateTiles({ data: newTiles });
  };

  private setNextCurrentHero = () => {
    const hero = this.props.heroesFight[1]
    this.props.setNextCurrentHero()
    this.props.resetTiles({});
    this.updateSelectedAction(ActionsType.heroMovement);
    this.props.setHeroSelected({
      setSelected: true,
      heroId: hero.id,
      playerId: hero.playerId
    });
    const newTiles = getNewTileStateByHeroStatus(this.props.tiles, hero.characteristics.speed,
      hero.tileX, hero.tileY, TileState.heroMovement);
    this.props.updateTiles({ data: newTiles });
  }
}

function mapStateToProps(state: IStoreState.IRootState) {
  return {
    tiles: state.battlefield.tiles,
    cards: state.session.allCards,
    players: state.session.players,
    heroesFight: state.session.heroesFight
  };
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    setHeroSelected: actions.setHeroSelected,
    updateTiles: actions.updateTiles,
    resetTiles: actions.resetTiles,
    setHeroesOrder: actions.setHeroesOrder,
    setNextCurrentHero: actions.setNextCurrentHero,
    decrementActionPoints: actions.decrementActionPoints
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fight);

