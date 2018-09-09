import { constants } from "../utils/constants";
import { IStyledTile } from "./Tile";

import styled from "styled-components";

export const StyledTile = styled.div`
width: ${constants.tileSize}px;
height: ${constants.tileSize}px;
background-color: rgba(255, 255, 255, 0);
border: solid;
border-bottom-color: ${(props: IStyledTile) => props.bottomColor};
border-left-color: ${(props: IStyledTile) => props.leftColor};
border-right-color: ${(props: IStyledTile) => props.rightColor};
border-top-color: ${(props: IStyledTile) => props.topColor};
border-width: ${(props: IStyledTile) => props.topWidth}px
  ${(props: IStyledTile) => props.rightWidth}px
  ${(props: IStyledTile) => props.bottomWidth}px
  ${(props: IStyledTile) => props.leftWidth}px;
&:hover {
  background: ${(props: IStyledTile) => props.hoverColor};
}
`
StyledTile.displayName = 'StyledTile'
