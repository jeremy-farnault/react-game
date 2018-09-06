import { ITile } from "../../core/models";

import * as React from "react";
import { IStoreState } from "../../types";
import IPlayers = IStoreState.IPlayers;
import Heroes from "../Heroes/Heroes";
import Tiles from "../Tiles/Tiles";

import styled from "styled-components";

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
                    tiles={this.props.tiles}/>
          )
        })}
      </ContainerBattlefield>
    );
  }
}

export default Battlefield;

const ContainerBattlefield = styled.div`
position: relative;
`;
ContainerBattlefield.displayName = 'ContainerBattlefield'
