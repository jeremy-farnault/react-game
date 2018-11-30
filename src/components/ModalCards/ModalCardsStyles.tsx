import styled from "styled-components";

export const CardImage = styled.img`
background: #776557;
transition: transform 0.15s;
position: relative;
width: 35vh;
height: 47vh;
box-shadow: 0px 0px 20px rgba(0,0,0,0.3);
border-radius: 8px;
transform: scale(0.4) translateY(25%);
cursor: pointer;
&:hover {
transform: translateY(-35%);
z-index: 1;
}
`
CardImage.displayName = 'CardImage'
