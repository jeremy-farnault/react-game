import * as actions from "../../core/actions/index";
import { ActionCharacteristic, ActionsType, IHeroBattlefield, ITile, TileState } from "../../core/models";
import { IStoreState } from "../../types";
import Heroes from "../Heroes/Heroes";
import Tiles from "../Tiles/Tiles";
import { ContainerBattlefield } from "./BattlefieldStyles";

import * as _ from "lodash";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import IPlayers = IStoreState.IPlayers;
import { getNewTileStateByHeroStatus } from "../../utils/tilesHelpers";

interface IProps {
  tiles: ITile[][]
  players: IPlayers
  setHeroSelected: typeof actions.setHeroSelected
  updateTiles: typeof actions.updateTiles
  resetTiles: typeof actions.resetTiles
  setHeroNewPosition: typeof actions.setHeroNewPosition
}

interface IState {
  currentSelectedHero: IHeroBattlefield | null
  currentSelectedAction: ActionsType
}

class Battlefield extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      currentSelectedHero: {} as IHeroBattlefield,
      currentSelectedAction: ActionsType.heroMovement
    };
  }

  public render() {
    const allHeroes = _.flatten(Object.keys(this.props.players)
      .map((playerId: string) => Object.keys(this.props.players[playerId].heroes)
        .map((heroId: string) => this.props.players[playerId].heroes[heroId])));
    return (
      <ContainerBattlefield>
        <Tiles tiles={this.props.tiles} clickOnTile={this.clickOnTile}/>
        <Heroes heroes={allHeroes}
                currentAction={this.state.currentSelectedAction}
                tiles={this.props.tiles}
                changeAction={this.changeAction}
                selectHero={this.selectHero}/>
      </ContainerBattlefield>
    );
  }

  private selectHero = (hero: IHeroBattlefield) => {
    if (this.state.currentSelectedHero === hero) {
      return
    }
    this.props.resetTiles({});
    this.setState({ currentSelectedHero: hero, currentSelectedAction: ActionsType.heroMovement });
    this.props.setHeroSelected({
      setSelected: true,
      heroId: hero.id,
      playerId: hero.playerId
    });
    const newTiles = getNewTileStateByHeroStatus(this.props.tiles, hero.characteristics.speed,
      hero.tileX, hero.tileY, TileState.heroMovement);
    this.props.updateTiles({ data: newTiles });
  };

  private clickOnTile = async (tile: ITile) => {
    this.props.resetTiles({});
    if (tile.state === TileState.empty && !!this.state.currentSelectedHero) {
      this.props.setHeroSelected({
        setSelected: false,
        heroId: this.state.currentSelectedHero.id,
        playerId: this.state.currentSelectedHero.playerId
      });
      this.setState({ currentSelectedHero: null });
    } else if (tile.state === TileState.heroMovement) {
      const hero = this.state.currentSelectedHero as IHeroBattlefield;
      await this.props.setHeroNewPosition({
        heroId: hero.id,
        playerId: hero.playerId,
        tileX: tile.columnIndex,
        tileY: tile.lineIndex,
        prevTileX: hero.tileX,
        prevTileY: hero.tileY
      });
      this.changeAction(ActionsType.heroMovement, tile)
    }
  };

  private changeAction = (action: ActionsType, tile: ITile) => {
    if (this.state.currentSelectedAction === action) {
      return
    }
    this.setState({currentSelectedAction: action})
    this.props.resetTiles({});
    const hero = this.state.currentSelectedHero as IHeroBattlefield;
    const newTiles = getNewTileStateByHeroStatus(this.props.tiles, hero.characteristics[ActionCharacteristic[action]],
      tile.columnIndex, tile.lineIndex, TileState[action]);
    this.props.updateTiles({ data: newTiles });
  }
}

function mapStateToProps(state: IStoreState.IRootState) {
  return {
    tiles: state.battlefield.tiles,
    players: state.session.players
  };
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    setHeroSelected: actions.setHeroSelected,
    setHeroNewPosition: actions.setHeroNewPosition,
    updateTiles: actions.updateTiles,
    resetTiles: actions.resetTiles
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Battlefield);
