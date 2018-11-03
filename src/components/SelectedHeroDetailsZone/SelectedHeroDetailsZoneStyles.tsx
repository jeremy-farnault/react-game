import { colors } from "../../utils/colors";
import { grid } from "../../utils/grid";

import styled from "styled-components";

export const DetailsContainer = styled.div`
background-color: ${colors.greyOpacity};
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
margin-right: 15px;
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

export const NameZone = styled.div`
margin-bottom: 8px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;
NameZone.displayName = "NameZone";

export const IconNameZone = styled.div`
&:hover {
opacity: ${grid.opacity};
}
`;
IconNameZone.displayName = "IconNameZone";
