import { grid } from "../../utils/grid";

import styled from "styled-components";

export const InitiativeAndDetailsContainer = styled.div`
position: relative;
`

export const DetailsHero = styled.img`
position: absolute;
top: ${(props: {top: number}) => props.top}px;
left: 50%;
transform: translate(-50%, -50%);
`
DetailsHero.displayName = 'DetailsHero'

export const Portrait = styled.img`
width: ${(props: {width: number, height: number}) => props.width}px;
height: ${(props: {width: number, height: number}) => props.height}px;
&:hover {
opacity: ${grid.opacity};
}
`;
Portrait.displayName = "Portrait";
