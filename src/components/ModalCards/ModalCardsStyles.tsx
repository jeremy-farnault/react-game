import { colors } from "../../utils/colors";
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
