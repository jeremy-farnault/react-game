import { constants } from "../../utils/constants";

import styled from "styled-components";

export const DetailsAndInitiativeContainer = styled.div`
z-index: 1;
max-width: ${constants.tileSize * constants.numberOfColumns}px;
position: relative;
display: flex;
flex-direction: row;
margin: 20px auto auto;
`
DetailsAndInitiativeContainer.displayName = 'DetailsAndInitiativeContainer'

export const DetailsAndInitiativeZone = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
`
DetailsAndInitiativeZone.displayName = 'DetailsAndInitiativeZone'
