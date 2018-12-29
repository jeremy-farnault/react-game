import { grid } from "../../utils/grid";
import { IStyledHero } from "./Hero";

import styled from "styled-components";
import { colors } from "../../utils/colors";

export const HeroStyled = styled.img`
position: absolute;
top: ${(props: IStyledHero) => props.posY}px;
left: ${(props: IStyledHero) => props.posX}px;
filter:drop-shadow(2px 2px 0 ${(props: IStyledHero) => props.shadowColor})
drop-shadow(-2px -2px 0 ${(props: IStyledHero) => props.shadowColor});
&:hover {
opacity: ${grid.opacity};
}
`;
HeroStyled.displayName = 'HeroStyled'
