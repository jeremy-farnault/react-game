import { constants } from "../../utils/constants";

import styled from "styled-components";

export const BottomSectionContainer = styled.div`
z-index: 1;
max-width: ${constants.tileSize * constants.numberOfColumns + 200}px;
justify-content: space-between;
position: relative;
display: flex;
flex-direction: row;
margin: 20px auto auto;
`
BottomSectionContainer.displayName = 'BottomSectionContainer'

export const LeftSection = styled.div`
flex-direction: row;
display: flex;
`
LeftSection.displayName = 'LeftSection'

export const RightSection = styled.div`
margin-right: 55px;
`
RightSection.displayName = 'RightSection'
