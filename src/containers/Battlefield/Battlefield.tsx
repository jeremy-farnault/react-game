import * as actions from "../../core/actions/index";
import { IHeroBattlefield, ITile, TileState } from "../../core/models";
import { IStoreState } from "../../types";
import IPlayers = IStoreState.IPlayers;
import Heroes from "../Heroes/Heroes";
import Tiles from "../Tiles/Tiles";
import { ContainerBattlefield } from "./BattlefieldStyles";

import * as _ from "lodash";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { getNewTileStateByHeroStatus } from "../../utils/tilesHelpers";

interface IProps {
  tiles: ITile[][]
  players: IPlayers
  setHeroSelected: typeof actions.setHeroSelected
  updateTiles: typeof actions.updateTiles
}

interface IState {
  currentSelectedHero: IHeroBattlefield | null
}

class Battlefield extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      currentSelectedHero: {} as IHeroBattlefield
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
                tiles={this.props.tiles}
                selectHero={this.selectHero}/>
      </ContainerBattlefield>
    );
  }

  private selectHero = (hero: IHeroBattlefield) => {
    this.setState({ currentSelectedHero: hero });
    this.props.setHeroSelected({
      setSelected: true,
      heroId: hero.id,
      playerId: hero.playerId
    });
    // todo make the other statuses
    const newTiles = getNewTileStateByHeroStatus(this.props.tiles, hero.characteristics.speed,
      hero.tileX, hero.tileY, TileState.heroMovement);
    this.props.updateTiles({data: newTiles})
  };

  private clickOnTile = (tile: ITile) => {
    if (tile.state === TileState.empty && !!this.state.currentSelectedHero) {
      this.props.setHeroSelected({
        setSelected: false,
        heroId: this.state.currentSelectedHero.id,
        playerId: this.state.currentSelectedHero.playerId
      });
      this.setState({ currentSelectedHero: null });
      // todo reset the tiles
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
    updateTiles: actions.updateTiles
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Battlefield);
