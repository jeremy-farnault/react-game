import { colors } from "../../utils/colors";
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
justify-content: center;
margin: auto;
`
BattlefieldScene.displayName = 'BattlefieldScene'

export const ActionPointsZoneStyled = styled.div`
background-color: ${colors.greyOpacity};
border-radius: 10px;
z-index: 2;
border: 2px solid ${colors.grey};;
padding: 20px;
min-width: 80px;
display: flex;
margin-right: 20px;
flex-direction: column;
justify-content: space-around;
align-items: center;
`
ActionPointsZoneStyled.displayName = 'ActionPointsZoneStyled'
