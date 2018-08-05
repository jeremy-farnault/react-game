import { ITile, TileColors, TileState } from "../core/models";
import { config } from "../utils/config";

import * as React from "react";
import styled from "styled-components";

interface IProps {
  tile: ITile
}

// interface IState {}

interface IStyledTile {
  borderColor: string
  bottomWidth: number
  leftWidth: number
  rightWidth: number
  topWidth: number
}

class Tile extends React.PureComponent<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return <StyledTile
      borderColor={TileColors[TileState[this.props.tile.state]]}
      bottomWidth={this.props.tile.lineIndex < config.numberOfLines - 1 ? 1 : 2}
      leftWidth={this.props.tile.columnIndex > 0 ? 1 : 2}
      rightWidth={this.props.tile.columnIndex < config.numberOfColumns - 1 ? 1 : 2}
      topWidth={this.props.tile.lineIndex > 0 ? 1 : 2}
    />;
  }
}

export default Tile;

const StyledTile = styled.div`
width: ${config.tileSize}px;
height: ${config.tileSize}px;
background-color: rgba(255, 255, 255, 0);
border: solid ${(props: IStyledTile) => props.borderColor};
border-width: ${(props: IStyledTile) => props.topWidth}px ${(props: IStyledTile) => props.rightWidth}px ${(props: IStyledTile) => props.bottomWidth}px ${(props: IStyledTile) => props.leftWidth}px;
&:hover {
  background: palevioletred;
}
`;
