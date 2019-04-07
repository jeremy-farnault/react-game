import { grid } from "../../utils/grid";
import { IStyledActionButton, IStyledActionImages } from "./ActionButton";

import styled from "styled-components";

export const ButtonActionStyled = styled.div`
left: ${(props: IStyledActionButton) => props.position.h}px;
top: ${(props: IStyledActionButton) => props.position.v}px;
height: 40px;
width: 40px;
position: absolute;
`
ButtonActionStyled.displayName = 'ButtonActionStyled'

export const ButtonActionImagesStyled = styled.div`
position: relative;
z-index: 2;
justify-content: center;
align-items: center;
display: flex;
opacity: ${(props: IStyledActionImages) => props.disabled ? grid.highOpacity : 1};
&:hover {
opacity: ${(props: IStyledActionImages) => props.disabled ? grid.highOpacity : (props.selected ? 1 : grid.opacity)};
}
`
ButtonActionImagesStyled.displayName = 'ButtonActionImagesStyled'

export const ButtonActionImageStyled = styled.img`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`
ButtonActionImageStyled.displayName = 'ButtonActionImageStyled'

export const ButtonActionSelectedBackground = styled.img`
position: absolute;
top: 0;
left: 0
`
ButtonActionSelectedBackground.displayName = 'ButtonActionSelectedBackground'
