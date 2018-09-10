import { IStyledHero } from "./Hero";

import styled from "styled-components";

export const HeroStyled = styled.img`
position: absolute;
top: ${(props: IStyledHero) => props.posY}px;
left: ${(props: IStyledHero) => props.posX}px;
border: ${(props: IStyledHero) => props.selected ? 1 : 0}px solid aqua;
&:hover {
border: 1px solid aqua;
top: ${(props: IStyledHero) => props.posY - 1}px;
left: ${(props: IStyledHero) => props.posX - 1}px;
}
`;
