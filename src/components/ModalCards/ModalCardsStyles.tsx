import { ICardImageProps } from "./ModalCards";

import styled from "styled-components";

export const CardImage = styled.img`
margin: 0 -13vh;
background: #776557;
transition: transform 0.15s;
position: relative;
width: 35vh;
height: 47vh;
box-shadow: 0 0 20px rgba(0,0,0,0.3);
border-radius: 8px;
transform: ${(props: ICardImageProps) => props.transform};
transform-origin: center bottom;
cursor: pointer;
&:hover {
transform: scale(0.8) translateY(-25%);
z-index: 1;
}
`
CardImage.displayName = 'CardImage'
