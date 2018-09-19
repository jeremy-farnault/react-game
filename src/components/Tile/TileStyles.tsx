import { IStyledTile } from "./Tile";

import styled from "styled-components";

export const StyledTile = styled.div`
width: ${(props: IStyledTile) => props.size}px;
height: ${(props: IStyledTile) => props.size}px;
background-color: rgba(255, 255, 255, 0);
border: 1px solid ${(props: IStyledTile) => props.borderColor};
&:hover {
  background: ${(props: IStyledTile) => props.hoverColor};
}
`
StyledTile.displayName = 'StyledTile'
