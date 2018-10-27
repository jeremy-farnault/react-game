import ActionButtons from "../../components/ActionButtons/ActionButtons";
import DetailsZone from "../../components/DetailsZone/DetailsZone";
import { TextStyled } from "../../components/DetailsZone/DetailsZoneStyles";
import * as actions from "../../core/actions";
import {
  ActionCharacteristic,
  ActionsType,
  ICards,
  IHeroBattlefield, IHeroBattlefieldPointsIcon,
  IHeroes, IHeroSkill,
  ITile, SkillsIcon,
  TileState
} from "../../core/models";
import { IStoreState } from "../../types";
import { colors } from "../../utils/colors";
import { constants } from "../../utils/constants";
import { getNewTileStateByHeroStatus } from "../../utils/tilesHelpers";

import Battlefield from "../Battlefield/Battlefield";
import { BackgroundImage, BattlefieldScene, ContainerScene } from "./FightStyles";

import * as _ from "lodash";
import * as React from "react";
import { connect } from "react-redux";
import * as ReactTooltip from "react-tooltip";
import { bindActionCreators, Dispatch } from "redux";
import IPlayers = IStoreState.IPlayers;

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


















        {heroes.length > 0 &&
        <div style={{
          zIndex: 1,
          margin: "auto",
          maxWidth: constants.tileSize * constants.numberOfColumns,
          position: "relative",
          display: 'flex',
          flexDirection: 'row',
          marginTop: 20
        }}>
          <div style={{
            backgroundColor: "rgba(70, 70, 70, .5)",
            borderRadius: 10,
            borderStyle: 'solid',
            borderColor: 'rgb(70, 70, 70)',
            borderWidth: 2,
            padding: 20,
            width: 'fit-content',
            display: "flex",
            marginRight: 20,
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {Object.keys(heroes[0].points).map(c =>
              <div key={c + heroes[0].id} style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <ReactTooltip place='left' type='light' effect='solid' multiline={true}/>
                <img data-tip={_.capitalize(_.lowerCase(c))} src={IHeroBattlefieldPointsIcon[c].path}
                     height={IHeroBattlefieldPointsIcon[c].size}/>
                <TextStyled>{heroes[0].points[c]}</TextStyled>
              </div>
            )}
            {heroes[0].skills.map((s: IHeroSkill) =>
              <div key={s.name + heroes[0].id} style={{
                display: "flex",
                alignItems: "center",
                marginTop: 10
              }}>
                <ReactTooltip place='left' type='light' effect='solid' multiline={true}/>
                <img data-tip={s.name} src={SkillsIcon[s.iconType]}
                     height={40}/>
              </div>
            )}
          </div>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
          <div style={{
            backgroundColor: "rgba(70, 70, 70, .5)",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 17,
            paddingRight: 17,
            height: 'fit-content',
            width: "fit-content",
            borderLeftWidth: 2,
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderRightWidth: 0,
            borderStyle: 'solid',
            borderColor: 'rgb(70, 70, 70)',
            borderTopRightRadius: (50 * 1.6 + 40 + 13) / 2,
            borderTopLeftRadius: (50 * 1.6 + 40 + 13) / 2,
            borderBottomLeftRadius: (50 * 1.6 + 40 + 13) / 2
          }}>
              <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"
              }}>
                <ReactTooltip place='top' type='light' effect='solid' multiline={true}/>
                <img src={heroes[0].assets.tokenPath.path}
                     data-tip={heroes[0].id}
                     width={heroes[0].assets.tokenPath.width * 1.6}
                     height={heroes[0].assets.tokenPath.width * 1.6}/>
                <div style={{
                  borderRadius: 4,
                  width: 8,
                  marginTop: 6,
                  height: 8,
                  backgroundColor: colors.blueGreen
                }}/>
              </div>
          </div>
          <div style={{
            backgroundColor: "rgba(70, 70, 70, .5)",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            flexDirection: "row",
            paddingTop: 10,
            height: 'fit-content',
            borderLeftWidth: 0,
            borderRightWidth: 2,
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderStyle: 'solid',
            borderColor: 'rgb(70, 70, 70)',
            paddingBottom: 10,
            paddingRight: 10,
            width: "fit-content",
            borderTopRightRadius: (50 * 1.3 + 20 + 13) / 2,
            borderTopLeftRadius: 15,
            borderBottomRightRadius: (50 * 1.3 + 20 + 13) / 2
          }}>
            {heroes.map((h: IHeroBattlefield, ind: number) => {
              if (ind === 0) {
                return null
              }
              return <div key={h.playerId + h.id} style={{
                marginRight: 10,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"
              }}>
                <ReactTooltip place='top' type='light' effect='solid' multiline={true}/>
                <img src={h.assets.tokenPath.path}
                     data-tip={h.id}
                     width={h.assets.tokenPath.width * 0.8}
                     height={h.assets.tokenPath.width * 0.8}/>
                <div style={{
                  borderRadius: 4,
                  width: 8,
                  marginTop: 6,
                  height: 8,
                  backgroundColor: h.playerId === heroes[0].playerId ? colors.blueGreen : colors.red
                }}/>
              </div>;
            })}
          </div>
          </div>
        </div>}










        {!!hero && <DetailsZone hero={hero}/>}
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

