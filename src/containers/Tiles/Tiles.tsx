import Tile from "../../components/Tile/Tile";
import { ITile } from "../../core/models";
import { Row } from "./TilesStyles";

import * as React from "react";

interface IProps {
  tiles: ITile[][]
  clickOnTile: (tile: ITile) => void
}

// interface IState {}

class Tiles extends React.PureComponent<IProps, {}> {

  public render() {
    return this.props.tiles.map((c: ITile[], index: number) => {
      return (
        <Row key={index}>
          {c.map((r: ITile) => {
            return (
              <Tile
                key={r.uuid}
                clickOnTile={this.props.clickOnTile}
                tile={r}
                tiles={this.props.tiles}/>
            );
          })}
        </Row>
      );
    });
  }
}

export default Tiles;

