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
import { BackgroundImage, BattlefieldScene, ContainerScene } from "./FightStyles";

import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import IPlayers = IStoreState.IPlayers;
import { colors } from "../../utils/colors";

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
    const hero = this.state.currentSelectedHero;
    const action = this.state.currentSelectedAction;
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
            currentSelectedAction={action}
            currentSelectedHero={hero}
            updateSelectedAction={this.updateSelectedAction}
            updateSelectedHero={this.updateSelectedHero}
            changeAction={this.changeAction}/>
        </BattlefieldScene>


        {!!hero &&
        <div style={{ display: "flex", margin: "auto", maxWidth: 1000, position: "relative", zIndex: 1 }}>
          <div style={{
            padding: 20,
            display: 'flex',
            flexDirection: "row",
            borderWidth: 2,
            borderColor: colors.yellow,
            borderStyle: "solid",
            marginTop: 50
          }}>
            <img src={hero.assets.tokenPath.path}
                 width={hero.assets.tokenPath.width}
                 height={hero.assets.tokenPath.height}/>
            <div style={{flexDirection: 'column'}}>
              {Object.keys(hero.characteristics).map(c =>
                <div key={c + hero.id + hero.playerId}>
                  {c}: {hero.characteristics[c]}
                </div>)}
            </div>
          </div>
        </div>}

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

