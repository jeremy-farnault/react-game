import { IHeroBattlefield, IHeroBattlefieldPointsIcon, IHeroSkill, SkillsIcon } from "../../core/models";
import {
  DetailsCurrentHeroContainer,
  PointsCurrentHero,
  SkillsCurrentHero,
  TextStyled
} from "./DetailsCurrentHeroStyles";

import * as _ from 'lodash'
import * as React from "react";

interface IProps {
  heroesSorted: IHeroBattlefield[]
}

// interface IState {}

class DetailsCurrentHero extends React.PureComponent<IProps, {}> {

  public render() {
    const heroes = this.props.heroesSorted;
    return <DetailsCurrentHeroContainer>
      {Object.keys(heroes[0].points).map(c =>
        <PointsCurrentHero key={c + heroes[0].id}
                           data-tip={_.capitalize(_.lowerCase(c))}
                           data-place='left'>
          <img src={IHeroBattlefieldPointsIcon[c].path}
               height={IHeroBattlefieldPointsIcon[c].size}/>
          <TextStyled>{heroes[0].points[c]}</TextStyled>
        </PointsCurrentHero>
      )}
      {heroes[0].skills.map((s: IHeroSkill) =>
        <SkillsCurrentHero key={s.name + heroes[0].id}>
          <img data-tip={s.name} src={SkillsIcon[s.iconType]}
               height={40} data-place='left'/>
        </SkillsCurrentHero>
      )}
    </DetailsCurrentHeroContainer>;
  }
}

export default DetailsCurrentHero;
