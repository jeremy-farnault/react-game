import { ActionsType, IHeroBattlefield, UIAssets } from "../../core/models";
import { ActionsAndDetailsStrings } from "../../core/strings";
import ActionButtons from "../ActionButtons/ActionButtons";
import DetailsSelectedHero from "../DetailsSelectedHero/DetailsSelectedHero";
import { ContainerStyled, PageContainerStyled, PagesContainerStyled, PageTitleStyled } from "./ActionAndDetailsStyles";

import * as React from "react";

interface IProps {
  changeAction: (action: ActionsType) => void
  heroesSorted: IHeroBattlefield[]
  selectedAction: ActionsType
  selectedHero: IHeroBattlefield | null
}

// interface IState {}

class ActionsAndDetails extends React.PureComponent<IProps, {}> {

  public render() {
    const hero = this.props.selectedHero || this.props.heroesSorted[0]
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
            <PageTitleStyled sameTeam={hero.playerId === this.props.heroesSorted[0].playerId}>
              {hero.id}
            </PageTitleStyled>
            <DetailsSelectedHero heroesSorted={this.props.heroesSorted} selectedHero={this.props.selectedHero}/>
          </PageContainerStyled>
        </PagesContainerStyled>
      </ContainerStyled>
    );
  }
}

export default ActionsAndDetails;
