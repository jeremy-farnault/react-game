import Tile from "../../components/Tile";
import { ITile } from "../../core/models";

import * as React from "react";
import { Row } from "./TilesStyles";

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
            return <Tile key={r.uuid} tile={r} tiles={this.props.tiles}/>;
          })}
        </Row>
      );
    });
  }
}

export default Tiles;

