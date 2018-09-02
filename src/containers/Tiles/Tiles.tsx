import Tile from "../../components/Tile";
import { ITile } from "../../core/models";

import * as React from "react";
import styled from "styled-components";

interface IProps {
  tiles: ITile[][]
}

// interface IState {}

class Tiles extends React.PureComponent<IProps, {}> {

  public render() {
    return this.props.tiles.map((c: ITile[], index: number) => {
      return (
        <Row key={index}>
          {c.map((r: ITile) => {
            return <Tile key={r.uuid} tile={r}/>;
          })}
        </Row>
      );
    });
  }
}

export default Tiles;

const Row = styled.div`
  flex-direction: row;
  display: flex;
  margin: auto;
  max-width: 760px;
`;
