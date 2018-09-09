import { IHeroBattlefield, ITile } from "../../core/models";

import * as React from "react";
import { IStoreState } from "../../types";
import IPlayers = IStoreState.IPlayers;
import Heroes from "../Heroes/Heroes";
import Tiles from "../Tiles/Tiles";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ContainerBattlefield } from "./BattlefieldStyles";

interface IProps {
  tiles: ITile[][]
  players: IPlayers
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
          )
        })}
      </ContainerBattlefield>
    );
  }

  private selectHero = (hero: IHeroBattlefield) => {
    console.log(hero)
  }
}

function mapStateToProps(state: IStoreState.IRootState) {
  return {
    tiles: state.battlefield.tiles,
    players: state.session.players
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({

  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Battlefield)
