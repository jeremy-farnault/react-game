import { IStyledActionButtons } from "./ActionButtons";

import styled from "styled-components";

export const ButtonsActionStyled = styled.div`
position: absolute;
top: ${(props: IStyledActionButtons) => props.top}px;
left: ${(props: IStyledActionButtons) => props.left}px;
`
ButtonsActionStyled.displayName = 'ButtonsActionStyled'
