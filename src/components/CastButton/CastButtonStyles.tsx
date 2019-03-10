import { ICastButtonDivProps } from "./CastButton";

import styled from "styled-components";

export const CastButtonDiv = styled.img`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 100px;
text-align: center;
margin-bottom: 20px;
margin-left: auto;
margin-right: auto;
opacity: ${(props: ICastButtonDivProps) => props.disabled ? 0.5 : 1};
-webkit-transition: all .7s;
-moz-transition: all .7s;
-o-transition: all .7s;
transition: all .7s;
-webkit-transform: ${(props: ICastButtonDivProps) => props.isOver && !props.disabled ? 'rotate(360deg) scale(1.5)' : 'rotate(0deg) scale(1)'};
-moz-transform: ${(props: ICastButtonDivProps) => props.isOver && !props.disabled ? 'rotate(360deg) scale(1.5)' : 'rotate(0deg) scale(1)'};
-o-transform: ${(props: ICastButtonDivProps) => props.isOver && !props.disabled ? 'rotate(360deg) scale(1.5)' : 'rotate(0deg) scale(1)'};
transform: ${(props: ICastButtonDivProps) => props.isOver && !props.disabled ? 'rotate(360deg) scale(1.5)' : 'rotate(0deg) scale(1)'};
&:hover {
cursor: pointer;
}
`
CastButtonDiv.displayName = 'CastButtonDiv'
