import { colors } from "../../utils/colors";

import styled from "styled-components";

export const ActionPointsZoneStyled = styled.div`
background-color: ${colors.greyOpacity};
border-radius: 10px;
z-index: 2;
border: 2px solid ${colors.grey};
padding: 20px;
height: fit-content;
min-width: 80px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`;
ActionPointsZoneStyled.displayName = "ActionPointsZoneStyled";

export const ActionPointsBackground = styled.img`
-webkit-transform: rotate(90deg);
-moz-transform: rotate(90deg);
-o-transform: rotate(90deg);
-ms-transform: rotate(90deg);
transform: rotate(90deg);
width: 215px;
`;
ActionPointsBackground.displayName = "ActionPointsBackground";

export const ActionPointsStyled = styled.img`
margin-top: 10px;
margin-bottom: 10px;
`;
ActionPointsStyled.displayName = "ActionPointsStyled";
