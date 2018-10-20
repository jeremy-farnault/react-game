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
max-width: 960px;
margin: auto;
`
BattlefieldScene.displayName = 'BattlefieldScene'
