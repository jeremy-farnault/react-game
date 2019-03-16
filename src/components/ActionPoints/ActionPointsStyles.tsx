import styled from "styled-components";

export const ActionPointsZoneStyled = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 2;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`;
ActionPointsZoneStyled.displayName = "ActionPointsZoneStyled";

export const ActionPointsBackground = styled.img`
height: 215px;
`;
ActionPointsBackground.displayName = "ActionPointsBackground";

export const ActionPointsStyled = styled.img`
margin-top: 10px;
margin-bottom: 10px;
`;
ActionPointsStyled.displayName = "ActionPointsStyled";
