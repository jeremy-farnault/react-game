import { colors } from "../../utils/colors";

import styled from "styled-components";

export const TimerZoneStyled = styled.div`
position: relative;
height: fit-content;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`
TimerZoneStyled.displayName = 'TimerZoneStyled'

export const TimerStyled = styled.span`
position: absolute;
top: 25%;
left: 50%;
transform: translate(-50%, -50%);
color: ${(props: {isWarning: boolean, isAlert: boolean}) => props.isAlert ? colors.red : (props.isWarning ? colors.orange : null)};
font-size: 20px;
font-family: monospace;
`
TimerStyled.displayName = 'TimerStyled'
