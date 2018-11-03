import { grid } from "../../utils/grid";

import styled from "styled-components";

export const Portrait = styled.img`
width: ${(props: {width: number, height: number}) => props.width}px;
height: ${(props: {width: number, height: number}) => props.height}px;
&:hover {
opacity: ${grid.opacity};
}
`;
Portrait.displayName = "Portrait";
