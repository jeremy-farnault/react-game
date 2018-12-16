import { colors } from "../../utils/colors";

import styled from "styled-components";

export const DrawButton = styled.div`
color: white;
width: fit-content;
padding: 10px 20px;
border: 2px double grey;
background-color: ${colors.greyOpacity};
opacity: ${(props: { disabled: boolean }) => props.disabled ? 0.5 : 1};
margin: auto;
&:hover {
cursor: pointer;
opacity: 0.5;
}
`
DrawButton.displayName = 'DrawButton'
