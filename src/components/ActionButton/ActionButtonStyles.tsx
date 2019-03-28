import { grid } from "../../utils/grid";
import { IStyledActionButton } from "./ActionButton";

import styled from "styled-components";

export const ButtonActionStyled = styled.div`
position: relative;
width: 50px;
opacity: ${(props: IStyledActionButton) => props.disabled ? grid.highOpacity : 1};
&:hover {
opacity: ${(props: IStyledActionButton) => props.disabled ? grid.highOpacity : (props.selected ? 1 : grid.opacity)};
}
`
ButtonActionStyled.displayName = 'ButtonActionStyled'

export const ButtonActionImageStyled = styled.img`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`
ButtonActionImageStyled.displayName = 'ButtonActionImageStyled'
