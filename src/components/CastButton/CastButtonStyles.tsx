import { colors } from "../../utils/colors";

import styled from "styled-components";

export const CastButtonDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: ${colors.yellow};
width: 100px;
height: 100px;
text-align: center;
border-radius: 50px;
margin-bottom: 20px;
margin-left: auto;
margin-right: auto;
border: 2px double ${colors.yellow};
background-color: ${colors.greyOpacity};
opacity: ${(props: { disabled: boolean }) => props.disabled ? 0.5 : 1};
&:hover {
cursor: pointer;
opacity: 0.5;
}
`
CastButtonDiv.displayName = 'CastButtonDiv'
