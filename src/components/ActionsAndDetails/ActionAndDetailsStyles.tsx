import { colors } from "../../utils/colors";

import styled from "styled-components";

export const PageTitleStyled = styled.div`
color: ${(props: { sameTeam?: boolean }) => props.sameTeam ? colors.blueGreen : (props.sameTeam === false ? colors.red : 'black')};
height: 50px;
align-items: flex-end;
justify-content: center;
display: flex;
`
PageTitleStyled.displayName = 'PageTitleStyled'

export const PageContainerStyled = styled.div`
display: flex;
flex-direction: column;
`
PageContainerStyled.displayName = 'PageContainerStyled'

export const PagesContainerStyled = styled.div`
position: absolute;
display: flex;
flex-direction: row;
top: 0;
left: 0;
`
PagesContainerStyled.displayName = 'PagesContainerStyled'

export const ContainerStyled = styled.div`
position: relative;
margin-right: 20px;
`
ContainerStyled.displayName = 'ContainerStyled'
