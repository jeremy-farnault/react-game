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

export const TextBoldStyled = styled.div`
color: white;
font-weight: 800;
font-size: 14px;
`
TextBoldStyled.displayName = 'TextBoldStyled'

export const TextStyled = styled.div`
color: white;
font-size: 14px;
margin-left: 5px;
`
TextStyled.displayName = 'TextStyled'

export const SkillsAndPointsZone = styled.div`
flex-direction: column;
justify-content: space-between;
display: flex;
margin-left: 10px;
`
SkillsAndPointsZone.displayName = 'SkillsAndPointsZone'

export const PointsZone = styled.div`
flex-direction: row;
display: flex;
align-items: center;
justify-content: flex-start;
`
PointsZone.displayName = 'PointsZone'
