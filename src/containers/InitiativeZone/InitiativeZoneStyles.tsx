import { VariousAssets } from "../../core/models";
import { colors } from "../../utils/colors";
import { grid } from "../../utils/grid";

import styled from "styled-components";

export const InitiativeContainer = styled.div`
position: relative;
display: flex;
flex-direction: row;
align-items: center;
`
InitiativeContainer.displayName = 'InitiativeContainer'

export const CurrentHeroZone = styled.div`
margin-right: 10px;
position: relative;
`
CurrentHeroZone.displayName = 'CurrentHeroZone'

export const CurrentHero = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
CurrentHero.displayName = 'CurrentHero'

export const CurrentHeroTeam = styled.div`
border-radius: 4px;
width: 8px;
margin-top: 6px;
height: 8px;
background-color: ${colors.blueGreen};
`
CurrentHeroTeam.displayName = 'CurrentHeroTeam'

export const SecondaryHeroesZone = styled.div`
display: flex;
flex-direction: row;
height: fit-content;
width: fit-content;
`
SecondaryHeroesZone.displayName = 'SecondaryHeroesZone'

export const SecondaryHeroZone = styled.div`
position: relative;
margin-right: 10px;
`
SecondaryHeroZone.displayName = 'SecondaryHeroZone'

export const SecondaryHero = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
SecondaryHero.displayName = 'SecondaryHero'

export const SecondaryHeroTeam = styled.div`
border-radius: 4px;
width: 8px;
margin-top: 6px;
height: 8px;
background-color: ${(props: {sameTeam: boolean}) => props.sameTeam ? colors.blueGreen : colors.red};
`
SecondaryHeroTeam.displayName = 'SecondaryHeroTeam'

export const DisplayMoreButton = styled.div`
margin-bottom: 14px;
margin-right: 10px;
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
border-radius: 20px;
background-color: ${colors.blackMediumOpacity};
&:hover {
background-color: ${colors.blackLowOpacity};
}
`
DisplayMoreButton.displayName = 'DisplayMoreButton'

export const EndTurnButton = styled.img`
height: ${VariousAssets.endTurn.size}px;
&:hover {
opacity: ${grid.opacity};
}
`
EndTurnButton.displayName = 'EndTurnButton'
