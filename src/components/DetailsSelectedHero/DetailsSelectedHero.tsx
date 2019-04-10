import { IHeroBattlefield, IHeroBattlefieldPointsIcon, IHeroSkill, SkillsIcon } from "../../core/models";
import {
  DetailsCurrentHeroContainer,
  PointsCurrentHero,
  SkillsCurrentHero,
  TextStyled
} from "./DetailsSelectedHeroStyles";

import * as _ from "lodash";
import * as React from "react";
import ReactTooltip = require("react-tooltip");

interface IProps {
  isCurrentHero: boolean
  selectedHero: IHeroBattlefield
}

// interface IState {}

class DetailsSelectedHero extends React.PureComponent<IProps, {}> {

  public render() {
    const hero = this.props.selectedHero;
    return <DetailsCurrentHeroContainer isCurrentHero={this.props.isCurrentHero}>
      <ReactTooltip type='light' effect='solid' multiline={true}/>
      {Object.keys(hero.points).map(c =>
        <PointsCurrentHero key={c + hero.id}
                           data-tip={_.capitalize(_.lowerCase(c))}
                           data-place='left'>
          <img src={IHeroBattlefieldPointsIcon[c].path}
               height={this.props.isCurrentHero ?
                 IHeroBattlefieldPointsIcon[c].size * 1.5 :
                 IHeroBattlefieldPointsIcon[c].size}/>
          <TextStyled>{hero.points[c]}</TextStyled>
        </PointsCurrentHero>
      )}
      {this.props.isCurrentHero && hero.skills.map((s: IHeroSkill) =>
        <SkillsCurrentHero key={s.name + hero.id}>
          <img data-tip={s.name} src={SkillsIcon[s.iconType]}
               height={40} data-place='left'/>
        </SkillsCurrentHero>
      )}
    </DetailsCurrentHeroContainer>;
  }
}

export default DetailsSelectedHero;
