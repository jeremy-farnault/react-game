import * as actions from "../../core/actions/index";
import { IHeroBattlefield, ITile } from "../../core/models";
import { IStoreState } from "../../types";
import IPlayers = IStoreState.IPlayers;
import Heroes from "../Heroes/Heroes";
import Tiles from "../Tiles/Tiles";
import { ContainerBattlefield } from "./BattlefieldStyles";

import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

interface IProps {
  tiles: ITile[][]
  players: IPlayers
  setHeroSelected: typeof actions.setHeroSelected
}

// interface IState {}

class Battlefield extends React.PureComponent<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <ContainerBattlefield>
        <Tiles tiles={this.props.tiles}/>
        {Object.keys(this.props.players).map((playerId: string) => {
          return (
            <Heroes key={this.props.players[playerId].id}
                    heroes={this.props.players[playerId].heroes}
                    tiles={this.props.tiles}
                    selectHero={this.selectHero}/>
          );
        })}
      </ContainerBattlefield>
    );
  }

  private selectHero = (hero: IHeroBattlefield) => {
    console.log(hero);
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
    setHeroSelected: actions.setHeroSelected
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Battlefield);
