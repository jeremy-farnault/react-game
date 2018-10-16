import { colors } from "../../utils/colors";

import styled from "styled-components";

export const ZoneStyled = styled.div`
display: flex;
margin: auto;
max-width: 1000px;
position: relative;
z-index: 1;
`
ZoneStyled.displayName = 'ZoneStyled'

export const BoxStyled = styled.div`
padding: 20px;
border: 2px solid ${colors.paleYellow};
margin-top: 50px;
`
BoxStyled.displayName = 'BoxStyled'

export const TitleStyled = styled.div`
color: ${colors.yellow};
text-align: center;
margin-bottom: 10px;
`
TitleStyled.displayName = 'TitleStyled'

export const DetailsZoneStyled = styled.div`
display: flex;
flex-direction: row;
`
DetailsZoneStyled.displayName = 'DetailsZoneStyled'

export const CharacteristicsZoneStyled = styled.div`
flex-direction: column;
margin-left: 10px;
`
CharacteristicsZoneStyled.displayName = 'CharacteristicsZoneStyled'

export const CharacteristicZoneStyled = styled.div`
flex-direction: row;
display: flex;
align-items: center;
justify-content: flex-start;
`
CharacteristicZoneStyled.displayName = 'CharacteristicZoneStyled'
