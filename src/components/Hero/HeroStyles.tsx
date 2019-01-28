import { grid } from "../../utils/grid";
import { IStyledHero } from "./Hero";

import styled from "styled-components";

export const HeroStyled = styled.img`
position: absolute;
top: ${(props: IStyledHero) => props.posY + (props.isDead ? 10 : 0)}px;
left: ${(props: IStyledHero) => props.posX}px;
filter:drop-shadow(2px 2px 0 ${(props: IStyledHero) => props.shadowColor})
drop-shadow(-2px -2px 0 ${(props: IStyledHero) => props.shadowColor});
transform: rotate(${(props: IStyledHero) => props.isDead ? 90 : 0}deg);
&:hover {
opacity: ${(props: IStyledHero) => props.isDead ? 1 : grid.opacity};
}
`;
HeroStyled.displayName = "HeroStyled";
