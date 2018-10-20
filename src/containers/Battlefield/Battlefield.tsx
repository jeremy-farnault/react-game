import * as actions from "../../core/actions/index";
import { ActionsType, IHeroBattlefield, ITile, TileState } from "../../core/models";
import { IStoreState } from "../../types";
import Heroes from "../Heroes/Heroes";
import Tiles from "../Tiles/Tiles";
import { ContainerBattlefield } from "./BattlefieldStyles";

import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { getNewTileStateByHeroStatus } from "../../utils/tilesHelpers";
import IPlayers = IStoreState.IPlayers;

interface IProps {
  allHeroes: IHeroBattlefield[]
  tiles: ITile[][]
  players: IPlayers
  setHeroSelected: typeof actions.setHeroSelected
  updateTiles: typeof actions.updateTiles
  resetTiles: typeof actions.resetTiles
  setHeroNewPosition: typeof actions.setHeroNewPosition
  currentSelectedHero: IHeroBattlefield | null
  currentSelectedAction: ActionsType
  updateSelectedHero: (hero: IHeroBattlefield | null) => void
  updateSelectedAction: (action: ActionsType) => void
  changeAction: (action: ActionsType, tile?: ITile) => void
}

// interface IState {}

class Battlefield extends React.PureComponent<IProps, {}> {

  public render() {
    return (
      <ContainerBattlefield>
        <Tiles tiles={this.props.tiles} clickOnTile={this.clickOnTile}/>
        <Heroes heroes={this.props.allHeroes}
                tiles={this.props.tiles}
                selectHero={this.selectHero}/>
      </ContainerBattlefield>
    );
  }

  private selectHero = (hero: IHeroBattlefield) => {
    if (this.props.currentSelectedHero === hero) {
      return;
    }
    this.props.resetTiles({});
    this.props.updateSelectedAction(ActionsType.heroMovement);
    this.props.updateSelectedHero(hero);
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
    if (tile.state === TileState.empty && !!this.props.currentSelectedHero) {
      this.props.setHeroSelected({
        setSelected: false,
        heroId: this.props.currentSelectedHero.id,
        playerId: this.props.currentSelectedHero.playerId
      });
      this.props.updateSelectedHero(null);
    } else if (tile.state === TileState.heroMovement) {
      const hero = this.props.currentSelectedHero as IHeroBattlefield;
      await this.props.setHeroNewPosition({
        heroId: hero.id,
        playerId: hero.playerId,
        tileX: tile.columnIndex,
        tileY: tile.lineIndex,
        prevTileX: hero.tileX,
        prevTileY: hero.tileY
      });
      this.props.changeAction(ActionsType.heroMovement, tile);
    }
  };
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
