import { IHeroBattlefield, IHeroBattlefieldPointsIcon, IHeroSkill, SkillsIcon } from "../../core/models";
import {
  DetailsCurrentHeroContainer,
  PointsCurrentHero,
  SkillsCurrentHero,
  TextStyled
} from "./DetailsSelectedHeroStyles";

import * as _ from "lodash";
import * as React from "react";

interface IProps {
  selectedHero: IHeroBattlefield | null
  heroesSorted: IHeroBattlefield[]
}

// interface IState {}

class DetailsSelectedHero extends React.PureComponent<IProps, {}> {

  public render() {
    const hero = this.props.selectedHero || this.props.heroesSorted[0];
    return <DetailsCurrentHeroContainer>
      {Object.keys(hero.points).map(c =>
        <PointsCurrentHero key={c + hero.id}
                           data-tip={_.capitalize(_.lowerCase(c))}
                           data-place='left'>
          <img src={IHeroBattlefieldPointsIcon[c].path}
               height={IHeroBattlefieldPointsIcon[c].size}/>
          <TextStyled>{hero.points[c]}</TextStyled>
        </PointsCurrentHero>
      )}
      {hero.skills.map((s: IHeroSkill) =>
        <SkillsCurrentHero key={s.name + hero.id}>
          <img data-tip={s.name} src={SkillsIcon[s.iconType]}
               height={40} data-place='left'/>
        </SkillsCurrentHero>
      )}
    </DetailsCurrentHeroContainer>;
  }
}

export default DetailsSelectedHero;
