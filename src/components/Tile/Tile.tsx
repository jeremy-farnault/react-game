import { ITile, TileColors, TileHoverColors, TileSize, TileState } from "../../core/models";
import { constants } from "../../utils/constants";
import { StyledContainerTile, StyledInvisibleTile, StyledTile } from "./TileStyles";

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
  invisibleHovered: boolean
}

class Tile extends React.PureComponent<IProps, {}> {

  private invisibleHovered: boolean = false

  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <StyledContainerTile size={constants.tileSize}>
        <StyledTile
          onClick={this.clickOnTile}
          hoverColor={TileHoverColors[TileState[this.props.tile.state]]}
          size={TileSize[TileState[this.props.tile.state]]}
          invisibleHovered={this.invisibleHovered}
          borderColor={TileColors[TileState[this.props.tile.state]]}>
          {this.props.tile.state === TileState.heroDead &&
          <StyledInvisibleTile
            onMouseEnter={this.setInvisibleHovered}
            onMouseLeave={this.setInvisibleNonHovered}
            onClick={this.clickOnTile}
            size={TileSize[TileState[this.props.tile.state]]}/>}
        </StyledTile>
      </StyledContainerTile>
    );
  }

  private clickOnTile = () => {
    this.props.clickOnTile(this.props.tile);
  };

  private setInvisibleHovered = () => {
   this.invisibleHovered = true
  }

  private setInvisibleNonHovered = () => {
    this.invisibleHovered = false
  }

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
