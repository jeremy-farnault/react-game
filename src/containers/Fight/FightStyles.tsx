import { colors } from "../../utils/colors";

import styled from "styled-components";

export const ContainerScene = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: flex-start;
margin: auto;
justify-content: center;
flex-direction: column;
background-color: ${colors.background};

`
ContainerScene.displayName = 'ContainerScene'

export const BackgroundImage = styled.img`
position: absolute;
top: 0;
left: 0;
z-index: 0;
`
BackgroundImage.displayName = 'BackgroundImage'

export const BattlefieldScene = styled.div`
flex-direction: row;
display: flex;
margin: auto;
`
BattlefieldScene.displayName = 'BattlefieldScene'

export const LeftSection = styled.div`
margin-right: 150px;
`
LeftSection.displayName = 'LeftSection'

export const RightSection = styled.div`
margin-left: 150px;
`
RightSection.displayName = 'RightSection'
