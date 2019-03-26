import { ActionsType, IHeroBattlefield, UIAssets } from "../../core/models";
import { ActionsAndDetailsStrings } from "../../core/strings";
import ActionButtons from "../ActionButtons/ActionButtons";
import DetailsCurrentHero from "../DetailsCurrentHero/DetailsCurrentHero";
import { ContainerStyled, PageContainerStyled, PagesContainerStyled, PageTitleStyled } from "./ActionAndDetailsStyles";

import * as React from "react";

interface IProps {
  changeAction: (action: ActionsType) => void
  heroesSorted: IHeroBattlefield[]
  selectedAction: ActionsType
}

// interface IState {}

class ActionsAndDetails extends React.PureComponent<IProps, {}> {

  public render() {
    return (
      <ContainerStyled>
        <img src={UIAssets.actionAndDetailsBackground.path}
             height={UIAssets.actionAndDetailsBackground.height}/>
        <PagesContainerStyled>
          <PageContainerStyled>
            <PageTitleStyled>{ActionsAndDetailsStrings.actionsTitle}</PageTitleStyled>
            <ActionButtons
              hero={this.props.heroesSorted[0]}
              currentActionPoints={this.props.heroesSorted[0].currentActionPoints}
              currentAction={this.props.selectedAction}
              changeAction={this.props.changeAction}/>
          </PageContainerStyled>
          <PageContainerStyled>
            <PageTitleStyled>{ActionsAndDetailsStrings.detailsTitle}</PageTitleStyled>
            <DetailsCurrentHero heroesSorted={this.props.heroesSorted}/>
          </PageContainerStyled>
        </PagesContainerStyled>
      </ContainerStyled>
    );
  }
}

export default ActionsAndDetails;
