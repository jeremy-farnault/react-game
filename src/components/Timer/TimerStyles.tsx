import { colors } from "../../utils/colors";

import styled from "styled-components";

export const TimerZoneStyled = styled.div`
background-color: ${colors.greyOpacity};
border-radius: 10px;
border: 2px solid ${colors.grey};
padding: 20px;
display: flex;
height: fit-content;
justify-content: center;
align-items: center;
`
TimerZoneStyled.displayName = 'TimerZoneStyled'

export const TimerStyled = styled.span`
color: ${(props: {isWarning: boolean, isAlert: boolean}) => props.isAlert ? colors.red : (props.isWarning ? colors.orange : colors.white)};
font-size: 20px;
font-family: monospace;
`
TimerStyled.displayName = 'TimerStyled'
