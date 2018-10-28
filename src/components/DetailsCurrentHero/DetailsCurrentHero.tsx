import { IHeroBattlefield, IHeroBattlefieldPointsIcon, IHeroSkill, SkillsIcon } from "../../core/models";
import { TextStyled } from "../DetailsModal/DetailsModalStyles";
import { DetailsCurrentHeroContainer, PointsCurrentHero, SkillsCurrentHero } from "./DetailsCurrentHeroStyles";

import * as _ from 'lodash'
import * as React from "react";
import * as ReactTooltip from "react-tooltip";

interface IProps {
  heroesSorted: IHeroBattlefield[]
}

// interface IState {}

class DetailsCurrentHero extends React.PureComponent<IProps, {}> {

  public render() {
    const heroes = this.props.heroesSorted;
    return <DetailsCurrentHeroContainer>
      {Object.keys(heroes[0].points).map(c =>
        <PointsCurrentHero key={c + heroes[0].id}>
          <ReactTooltip place='left' type='light' effect='solid' multiline={true}/>
          <img data-tip={_.capitalize(_.lowerCase(c))} src={IHeroBattlefieldPointsIcon[c].path}
               height={IHeroBattlefieldPointsIcon[c].size}/>
          <TextStyled>{heroes[0].points[c]}</TextStyled>
        </PointsCurrentHero>
      )}
      {heroes[0].skills.map((s: IHeroSkill) =>
        <SkillsCurrentHero key={s.name + heroes[0].id}>
          <ReactTooltip place='left' type='light' effect='solid' multiline={true}/>
          <img data-tip={s.name} src={SkillsIcon[s.iconType]}
               height={40}/>
        </SkillsCurrentHero>
      )}
    </DetailsCurrentHeroContainer>;
  }
}

export default DetailsCurrentHero;
