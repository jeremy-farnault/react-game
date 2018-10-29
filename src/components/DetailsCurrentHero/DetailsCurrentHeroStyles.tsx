import { colors } from "../../utils/colors";

import styled from "styled-components";

export const DetailsCurrentHeroContainer = styled.div`
background-color: ${colors.greyOpacity};
border-radius: 10px;
border: 2px solid ${colors.grey};;
padding: 20px;
width: fit-content;
display: flex;
margin-right: 20px;
flex-direction: column;
justify-content: center;
align-items: center;
`
DetailsCurrentHeroContainer.displayName = 'DetailsCurrentHeroContainer'

export const PointsCurrentHero = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
`
PointsCurrentHero.displayName = 'PointsCurrentHero'

export const SkillsCurrentHero = styled.div`
display: flex;
align-items: center;
margin-top: 10px;
`
SkillsCurrentHero.displayName = 'SkillsCurrentHero'
