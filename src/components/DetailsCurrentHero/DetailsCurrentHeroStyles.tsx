import styled from "styled-components";

export const DetailsCurrentHeroContainer = styled.div`
height: 150px;
width: 195px;
display: grid;
grid-template-rows: repeat(3, 50px);
grid-gap: 10px;
grid-auto-flow: column;
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
