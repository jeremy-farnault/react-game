import { grid } from "../../utils/grid";
import { IStyledHero } from "./Hero";

import styled from "styled-components";

export const HeroStyled = styled.img`
position: absolute;
top: ${(props: IStyledHero) => props.posY}px;
left: ${(props: IStyledHero) => props.posX}px;
&:hover {
opacity: ${grid.opacity};
}
`;
HeroStyled.displayName = 'HeroStyled'
