import { VariousAssets } from "../../core/models";
import { colors } from "../../utils/colors";
import { grid } from "../../utils/grid";

import styled from "styled-components";

export const BottomSectionContainer = styled.div`
z-index: 1;
justify-content: space-between;
align-items: center;
margin-top: -50px;
display: flex;
`
BottomSectionContainer.displayName = 'BottomSectionContainer'

export const LeftSection = styled.div`
flex-direction: row;
display: flex;
`
LeftSection.displayName = 'LeftSection'

export const RightSection = styled.div`
display: flex;
flex-direction: column;
`
RightSection.displayName = 'RightSection'

export const DeckImage = styled.img`
height: ${VariousAssets.cardBack.height}px;
border: 2px solid ${colors.transparent};
&:hover {
opacity: ${grid.lowOpacity};
border-color: ${colors.paleYellow};
}
`
DeckImage.displayName = 'DeckImage'
