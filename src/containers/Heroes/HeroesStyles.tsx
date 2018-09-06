import styled from "styled-components";

export const HeroStyled = styled.img`
position: absolute;
top: ${(props: { posX: number, posY: number }) => props.posY}px;
left: ${(props: { posX: number, posY: number }) => props.posX}px;
&:hover {
border: 1px solid aqua;
top: ${(props: { posX: number, posY: number }) => props.posY - 1}px;
left: ${(props: { posX: number, posY: number }) => props.posX - 1}px;
}
`;
