import styled from "styled-components";

export const DrawButton = styled.div`
position: relative;
opacity: ${(props: { disabled: boolean }) => props.disabled ? 0.5 : 1};
&:hover {
cursor: pointer;
opacity: 0.5;
}
`
DrawButton.displayName = 'DrawButton'

export const Images = styled.img`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`
Images.displayName = 'Images'

export const TextButton = styled.div`
position: absolute;
top: 50%;
color: white;
left: 50%;
transform: translate(-50%, -50%);
`
TextButton.displayName = 'TextButton'
