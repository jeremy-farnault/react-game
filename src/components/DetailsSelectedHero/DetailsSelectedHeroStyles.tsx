import styled from "styled-components";

export const DetailsCurrentHeroContainer = styled.div`
display: grid;
grid-template-rows: repeat(3, ${(props: {isCurrentHero: boolean}) => props.isCurrentHero ? 50 : 30}px);
grid-auto-flow: column;
margin-top: 10px;
grid-column-gap: 5px;
justify-content: center;
align-content: center;
`
DetailsCurrentHeroContainer.displayName = 'DetailsCurrentHeroContainer'

export const PointsCurrentHero = styled.div`
z-index: 2;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
PointsCurrentHero.displayName = 'PointsCurrentHero'

export const SkillsCurrentHero = styled.div`
z-index: 2;
display: flex;
align-items: center;
`
SkillsCurrentHero.displayName = 'SkillsCurrentHero'

export const TextStyled = styled.div`
color: #FFF;
font-size: 14px;
margin-left: 5px;
`
TextStyled.displayName = 'TextStyled'
