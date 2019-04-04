import styled from "styled-components";

export const ActionPointsImagesZoneStyled = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
`
ActionPointsImagesZoneStyled.displayName = 'ActionPointsImagesZoneStyled'

export const ActionPointsZoneStyled = styled.div`
width: 160px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 2;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`;
ActionPointsZoneStyled.displayName = "ActionPointsZoneStyled";

export const ActionPointsStyled = styled.img`
margin-top: 10px;
margin-bottom: 10px;
`;
ActionPointsStyled.displayName = "ActionPointsStyled";
