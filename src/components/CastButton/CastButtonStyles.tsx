import { colors } from "../../utils/colors";
import { ICastButtonDivProps } from "./CastButton";

import styled from "styled-components";

export const CastButtonDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: ${(props: ICastButtonDivProps) => props.isOver ? colors.yellow : colors.orange};
width: 100px;
height: 100px;
text-align: center;
border-radius: 50px;
margin-bottom: 20px;
margin-left: auto;
margin-right: auto;
border: 2px double ${(props: ICastButtonDivProps) => props.isOver ? colors.yellow : colors.orange};
background-color: ${colors.greyOpacity};
opacity: ${(props: ICastButtonDivProps) => props.disabled ? 0.5 : 1};
&:hover {
cursor: pointer;
opacity: ${(props: ICastButtonDivProps) => props.isOver ? 1 : 0.5};
}
`
CastButtonDiv.displayName = 'CastButtonDiv'
