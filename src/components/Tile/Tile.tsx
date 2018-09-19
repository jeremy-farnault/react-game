import { ITile, TileColors, TileHoverColors, TileSize, TileState } from "../../core/models";
import { constants } from "../../utils/constants";
import { StyledTile } from "./TileStyles";

import * as React from "react";

interface IProps {
  tile: ITile
  tiles: ITile[][]
  clickOnTile: (tile: ITile) => void
}

// interface IState {}

export interface IStyledTile {
  borderColor: string
  hoverColor: string
  size: number
}

class Tile extends React.PureComponent<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <div style={{width: constants.tileSize, height: constants.tileSize, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <StyledTile
          onClick={this.clickOnTile}
          hoverColor={TileHoverColors[TileState[this.props.tile.state]]}
          size={TileSize[TileState[this.props.tile.state]]}
          borderColor={TileColors[TileState[this.props.tile.state]]}
        />
      </div>
    );
  }

  private clickOnTile = () => {
    this.props.clickOnTile(this.props.tile);
  };

  // private getBorderRightColor = () => {
  //   if (this.props.tile.state === TileState.idleHero && this.props.tile.columnIndex < constants.numberOfColumns - 1 &&
  //     this.props.tiles[this.props.tile.lineIndex][this.props.tile.columnIndex + 1].state !== TileState.idleHero) {
  //     return TileColors[TileState[this.props.tiles[this.props.tile.lineIndex][this.props.tile.columnIndex + 1].state]];
  //   }
  //   return TileColors[TileState[this.props.tile.state]];
  // };
  //
  // private getBorderLeftColor = () => {
  //   if (this.props.tile.state === TileState.idleHero && this.props.tile.columnIndex - 1 >= 0 &&
  //     this.props.tiles[this.props.tile.lineIndex][this.props.tile.columnIndex - 1].state !== TileState.idleHero) {
  //     return TileColors[TileState[this.props.tiles[this.props.tile.lineIndex][this.props.tile.columnIndex - 1].state]];
  //   }
  //   return TileColors[TileState[this.props.tile.state]];
  // };
  //
  // private getBorderBottomColor = () => {
  //   if (this.props.tile.state === TileState.idleHero && this.props.tile.lineIndex + 1 < constants.numberOfLines - 1 &&
  //     this.props.tiles[this.props.tile.lineIndex + 1][this.props.tile.columnIndex].state !== TileState.idleHero) {
  //     return TileColors[TileState[this.props.tiles[this.props.tile.lineIndex + 1][this.props.tile.columnIndex].state]];
  //   }
  //   return TileColors[TileState[this.props.tile.state]];
  // };
  //
  // private getBorderTopColor = () => {
  //   if (this.props.tile.state === TileState.idleHero && this.props.tile.lineIndex - 1 >= 0 &&
  //     this.props.tiles[this.props.tile.lineIndex - 1][this.props.tile.columnIndex].state !== TileState.idleHero) {
  //     return TileColors[TileState[this.props.tiles[this.props.tile.lineIndex - 1][this.props.tile.columnIndex].state]];
  //   }
  //   return TileColors[TileState[this.props.tile.state]];
  // };

  // private getBorderRightWidth = () => {
  //   return this.props.tile.columnIndex < constants.numberOfColumns - 1 ? 1 : 2;
  // };
  //
  // private getBorderLeftWidth = () => {
  //   return this.props.tile.columnIndex > 0 ? 1 : 2;
  // };
  //
  // private getBorderBottomWidth = () => {
  //   return this.props.tile.lineIndex < constants.numberOfLines - 1 ? 1 : 2;
  // };
  //
  // private getBorderTopWidth = () => {
  //   return this.props.tile.lineIndex > 0 ? 1 : 2;
  // };
}

export default Tile;
