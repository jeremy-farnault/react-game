import { colors } from "../../utils/colors";
import { constants } from "../../utils/constants";
import { grid } from "../../utils/grid";
import { IStyledActionButton } from "./ActionButton";

import styled from "styled-components";

export const ButtonActionStyled = styled.div`
border-radius: ${(constants.buttonActionSize + 8) / 2}px;
background-color: ${(props: IStyledActionButton) => props.selected ? colors.chocolateOpacity : colors.transparent};
width: ${constants.buttonActionSize + 8}px;
height: ${constants.buttonActionSize + 8}px;
margin-bottom: 3px;
margin-top: 3px;
align-items: center;
justify-content: center;
display: flex;
&:hover {
opacity: ${(props: IStyledActionButton) => props.selected ? 1 : grid.opacity};
}
`
ButtonActionStyled.displayName = 'ButtonActionStyled'
