import { colors } from "../../utils/colors";

import styled from "styled-components";

export const DetailsContainer = styled.div`
background-color: rgba(70, 70, 70, 0.5);
margin-bottom: 20px;
padding: 20px;
border: 2px solid ${(props: { sameTeam: boolean }) => props.sameTeam ? colors.blueGreen : colors.paleRed};
border-radius: 10px;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
`;
DetailsContainer.displayName = "DetailsContainer";

export const TextName = styled.div`
color: ${(props: { sameTeam: boolean }) => props.sameTeam ? colors.blueGreen : colors.paleRed};
margin-bottom: 24px;
`;
TextName.displayName = "TextName";

export const IconZone = styled.div`
display: flex;
flex-direction: row;
`;
IconZone.displayName = "IconZone";

export const PointsZone = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-left: 10px;
margin-right: 10px;
`;
PointsZone.displayName = "PointsZone";

export const SkillsZone = styled.div`
display: flex;
align-items: center;
margin-left: 10px;
margin-right: 10px;
`;
SkillsZone.displayName = "SkillsZone";
