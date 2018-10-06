import { colors } from "../../utils/colors";
import { constants } from "../../utils/constants";
import { grid } from "../../utils/grid";
import { IStyledActionButton } from "./ActionButton";

import styled from "styled-components";

export const ButtonActionStyled = styled.div`
border-radius: ${constants.buttonActionSize / 2}px;
border: 1px dotted ${colors.chocolate};
background-color: ${(props: IStyledActionButton) => props.selected ? colors.chocolate : colors.transparent}
width: ${constants.buttonActionSize}px;
height: ${constants.buttonActionSize}px;
margin-bottom: 10px;
&:hover {
opacity: ${(props: IStyledActionButton) => props.selected ? 1 : grid.opacity};
}
`
ButtonActionStyled.displayName = 'ButtonActionStyled'
