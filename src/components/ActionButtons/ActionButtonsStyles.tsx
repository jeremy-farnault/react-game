import styled from "styled-components";

export const ActionZoneStyled = styled.div`
height: 210px;
width: 195px;
display: grid;
grid-template-rows: repeat(3, 50px);
grid-auto-flow: column;
grid-column-gap: 20px;
grid-row-gap: 10px;
justify-content: center;
align-content: center;
`
ActionZoneStyled.displayName = 'ActionZoneStyled'
