import { constants } from "../../utils/constants";

import styled from "styled-components";

export const ContainerScene = styled.div`
margin: auto;
padding: 50px 0;
`
ContainerScene.displayName = 'ContainerScene'

export const BackgroundImage = styled.img`
position: absolute;
top: -300px;
left: 0;
z-index: 0;
`
BackgroundImage.displayName = 'BackgroundImage'

export const BattlefieldScene = styled.div`
flex-direction: row;
display: flex;
max-width: ${constants.tileSize * constants.numberOfColumns + 200}px;
justify-content: flex-start;
margin: auto;
`
BattlefieldScene.displayName = 'BattlefieldScene'

export const LeftSection = styled.div`
margin-right: 20px;
z-index: 2;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-between;
`
LeftSection.displayName = 'LeftSection'

export const RightSection = styled.div`
z-index: 2;
margin-left: 20px;
`
RightSection.displayName = 'RightSection'
