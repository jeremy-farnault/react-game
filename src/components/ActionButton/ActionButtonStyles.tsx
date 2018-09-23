import { colors } from "../../utils/colors";
import { constants } from "../../utils/constants";
import { grid } from "../../utils/grid";

import styled from "styled-components";

export const ButtonActionStyled = styled.div`
border-radius: ${constants.buttonActionSize / 2}px;
border-color: ${colors.chocolate};
border-width: 1px;
border-style: dotted;
width: ${constants.buttonActionSize}px;
height: ${constants.buttonActionSize}px;
margin-top: 5px;
margin-bottom: 5px;
&:hover {
opacity: ${grid.opacity};
}
`
ButtonActionStyled.displayName = 'ButtonActionStyled'
