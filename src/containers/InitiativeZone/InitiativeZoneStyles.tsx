import { VariousAssets } from "../../core/models";
import { colors } from "../../utils/colors";
import { grid } from "../../utils/grid";

import styled from "styled-components";

export const InitiativeContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
`
InitiativeContainer.displayName = 'InitiativeContainer'

export const CurrentHeroZone = styled.div`
background-color: ${colors.greyOpacity};
display: flex;
justify-content: flex-start;
align-items: flex-end;
flex-direction: row;
padding: 10px 17px;
height: fit-content;
width: fit-content;
border: 2px solid ${colors.grey};
border-right-width: 0;
border-top-right-radius: ${(50 * 1.6 + 40 + 13) / 2}px;
border-top-left-radius: ${(50 * 1.6 + 40 + 13) / 2}px;
border-bottom-left-radius: ${(50 * 1.6 + 40 + 13) / 2}px;
`
CurrentHeroZone.displayName = 'CurrentHeroZone'

export const CurrentHero = styled.div`
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
background-color: ${colors.greyOpacity};
display: flex;
justify-content: flex-start;
align-items: flex-end;
flex-direction: row;
padding-top: 10px;
height: fit-content;
border: 2px solid ${colors.grey};
border-left-width: 0;
padding-bottom: 10px;
padding-right: 10px;
width: fit-content;
border-top-right-radius: ${(50 * 1.3 + 20 + 13) / 2}px;
border-top-left-radius: 15px;
border-bottom-right-radius: ${(50 * 1.3 + 20 + 13) / 2}px;
`
SecondaryHeroesZone.displayName = 'SecondaryHeroesZone'

export const SecondaryHero = styled.div`
margin-right: 10px;
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
background-color: ${(props: {sameTeam: boolean}) => props.sameTeam ? colors.blueGreen : colors.paleRed};
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
margin-bottom: 12px;
margin-left: 10px;
&:hover {
opacity: ${grid.opacity};
}
`
EndTurnButton.displayName = 'EndTurnButton'
