import { IStyledHero } from "./Hero";

import styled from "styled-components";

export const HeroStyled = styled.img`
position: absolute;
top: ${(props: IStyledHero) => props.selected ? props.posY - 1 : props.posY}px;
left: ${(props: IStyledHero) => props.selected ? props.posX - 1 : props.posX}px;
border: ${(props: IStyledHero) => props.selected ? 1 : 0}px solid blue;
&:hover {
border: 1px solid aqua;
top: ${(props: IStyledHero) => props.posY - 1}px;
left: ${(props: IStyledHero) => props.posX - 1}px;
}
`;
HeroStyled.displayName = 'HeroStyled'

export const ButtonActionStyled = styled.div`
position: absolute;
border-radius: 10px;
width: 20px;
height: 20px;
background-color: red;
`
ButtonActionStyled.displayName = 'ButtonActionStyled'
