import { colors } from "../../utils/colors";

import styled from "styled-components";

export const ImageTextDiv = styled.div`
position: relative;
max-height: 35px;
`
ImageTextDiv.displayName = 'ImageTextDiv'

export const TextZoneStyled = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: ${(props: {isCurrentPlayer: boolean}) =>props.isCurrentPlayer ? colors.blueGreen : colors.paleRed};
`
TextZoneStyled.displayName = 'TextZoneStyled'
