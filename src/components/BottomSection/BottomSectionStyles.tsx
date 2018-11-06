import { constants } from "../../utils/constants";

import styled from "styled-components";

export const BottomSectionContainer = styled.div`
z-index: 1;
max-width: ${constants.tileSize * constants.numberOfColumns + 200}px;
position: relative;
display: flex;
flex-direction: row;
margin: 20px auto auto;
`
BottomSectionContainer.displayName = 'BottomSectionContainer'
