import { constants } from "../../utils/constants";

import styled from "styled-components";

export const ButtonActionStyled = styled.div`
border-radius: ${constants.buttonActionSize / 2}px;
width: ${constants.buttonActionSize}px;
height: ${constants.buttonActionSize}px;
margin-top: 5px;
margin-bottom: 5px;
background-color: red;
`
ButtonActionStyled.displayName = 'ButtonActionStyled'
