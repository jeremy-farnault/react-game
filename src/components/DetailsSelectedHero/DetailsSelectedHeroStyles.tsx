import styled from "styled-components";

export const DetailsCurrentHeroContainer = styled.div`
height: 210px;
width: 195px;
display: grid;
grid-template-rows: repeat(3, 50px);
grid-auto-flow: column;
grid-column-gap: 40px;
justify-content: center;
align-content: center;
`
DetailsCurrentHeroContainer.displayName = 'DetailsCurrentHeroContainer'

export const PointsCurrentHero = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
PointsCurrentHero.displayName = 'PointsCurrentHero'

export const SkillsCurrentHero = styled.div`
display: flex;
align-items: center;
`
SkillsCurrentHero.displayName = 'SkillsCurrentHero'

export const TextStyled = styled.div`
font-size: 14px;
margin-left: 5px;
`
TextStyled.displayName = 'TextStyled'
