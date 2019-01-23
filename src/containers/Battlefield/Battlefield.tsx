import * as actions from "../../core/actions/index";
import { ActionsType, IHeroBattlefield, ITile, TileState } from "../../core/models";
import { IStoreState } from "../../types";
import Heroes from "../Heroes/Heroes";
import Tiles from "../Tiles/Tiles";
import { ContainerBattlefield } from "./BattlefieldStyles";

import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

interface IProps {
  allHeroes: IHeroBattlefield[]
  currentHero: IHeroBattlefield
  tiles: ITile[][]
  setHeroSelected: typeof actions.setHeroSelected
  updateTiles: typeof actions.updateTiles
  resetTiles: typeof actions.resetTiles
  setHeroNewPosition: typeof actions.setHeroNewPosition
  currentSelectedHero: IHeroBattlefield | null
  currentSelectedAction: ActionsType
  updateSelectedHero: (hero: IHeroBattlefield | null) => void
  updateHeroPoints: typeof actions.updateHeroPoints
  updateSelectedAction: (action: ActionsType) => void
  changeAction: (action: ActionsType, tile?: ITile) => void
  decrementActionPoints: typeof actions.decrementActionPoints
}

// interface IState {}

class Battlefield extends React.PureComponent<IProps, {}> {

  public render() {
    return (
      <ContainerBattlefield>
        <Tiles tiles={this.props.tiles} clickOnTile={this.clickOnTile}/>
        <Heroes heroes={this.props.allHeroes}
                tiles={this.props.tiles}
                setNewActionPointsValue={this.setNewActionPointsValue}
                selectHero={this.props.updateSelectedHero}/>
      </ContainerBattlefield>
    );
  }

  private clickOnTile = async (tile: ITile) => {
    if (!!this.props.currentSelectedHero &&
      (tile.state === TileState.empty ||
        this.props.currentHero.currentActionPoints < 1)) {
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
      this.props.decrementActionPoints({
        heroIndex: 0,
        heroId: hero.id,
        playerId: hero.playerId
      });
      this.props.changeAction(ActionsType.heroMovement, tile);
    }
  };

  private setNewActionPointsValue = (hero: IHeroBattlefield, pointLabel: string, newValue: number) => {
    this.props.updateHeroPoints({
      heroId: hero.id,
      playerId: hero.playerId,
      pointLabel,
      newValue
    });
  };
}

function mapStateToProps(state: IStoreState.IRootState) {
  return {
    tiles: state.battlefield.tiles
  };
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    setHeroSelected: actions.setHeroSelected,
    setHeroNewPosition: actions.setHeroNewPosition,
    updateTiles: actions.updateTiles,
    updateHeroPoints: actions.updateHeroPoints,
    resetTiles: actions.resetTiles
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Battlefield);
