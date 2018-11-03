import { colors } from "../../utils/colors";

import styled from "styled-components";

export const ActionZoneStyled = styled.div`
background-color: ${colors.greyOpacity};
border-radius: 10px;
border: 2px solid ${colors.grey};;
padding: 20px;
min-width: 80px;
display: flex;
margin-right: 20px;
flex-direction: column;
justify-content: space-around;
align-items: center;
`
ActionZoneStyled.displayName = 'ActionZoneStyled'
