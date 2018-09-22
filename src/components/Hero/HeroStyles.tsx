import { constants } from "../../utils/constants";
import { IStyledHero } from "./Hero";

import styled from "styled-components";

export const HeroStyled = styled.img`
position: absolute;
top: ${(props: IStyledHero) => props.posY}px;
left: ${(props: IStyledHero) => props.posX}px;
&:hover {
border: 1px solid aqua;
top: ${(props: IStyledHero) => props.posY - 1}px;
left: ${(props: IStyledHero) => props.posX - 1}px;
}
`;
HeroStyled.displayName = 'HeroStyled'

export const ButtonActionStyled = styled.div`
border-radius: ${constants.buttonActionSize / 2}px;
width: ${constants.buttonActionSize}px;
height: ${constants.buttonActionSize}px;
background-color: red;
`
ButtonActionStyled.displayName = 'ButtonActionStyled'
