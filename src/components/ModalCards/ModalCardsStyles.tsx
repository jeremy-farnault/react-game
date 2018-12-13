import { colors } from "../../utils/colors";

import styled from "styled-components";

export const CastButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: ${colors.yellow};
width: 100px;
height: 100px;
text-align: center;
border-radius: 50px;
border-style: double;
border-color: ${colors.yellow};
border-width: 2px;
background-color: ${colors.greyOpacity};
opacity: ${(props: { disabled: boolean }) => props.disabled ? 0.5 : 1};
margin: auto;
&:hover {
cursor: pointer;
opacity: 0.5;
}
`
CastButton.displayName = 'CastButton'

export const DrawButton = styled.div`
color: white;
width: fit-content;
padding: 10px 20px;
border-style: double;
border-color: grey;
border-width: 2px;
background-color: ${colors.greyOpacity};
opacity: ${(props: { disabled: boolean }) => props.disabled ? 0.5 : 1};
margin: auto;
&:hover {
cursor: pointer;
opacity: 0.5;
}
`
DrawButton.displayName = 'DrawButton'
