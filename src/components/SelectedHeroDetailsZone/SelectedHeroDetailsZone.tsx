import { IHeroBattlefield, IHeroBattlefieldPointsIcon, IHeroSkill, SkillsIcon } from "../../core/models";
import { TextStyled } from "../DetailsModal/DetailsModalStyles";
import { DetailsContainer, IconZone, PointsZone, SkillsZone, TextName } from "./SelectedHeroDetailsZoneStyles";

import * as _ from "lodash";
import * as React from "react";
import ReactTooltip = require("react-tooltip");

interface IProps {
  heroesSorted: IHeroBattlefield[]
  selectedHero: IHeroBattlefield
}

// interface IState {}

class SelectedHeroDetailsZone extends React.PureComponent<IProps, {}> {

  public render() {
    const heroes = this.props.heroesSorted;
    const hero = this.props.selectedHero;
    return (
      <DetailsContainer sameTeam={hero.playerId === heroes[0].playerId}>
        <ReactTooltip type='light' effect='solid' multiline={true}/>
        <TextName sameTeam={hero.playerId === heroes[0].playerId}>{hero.id}</TextName>
        <IconZone>
          {Object.keys(hero.points).map(c =>
            <PointsZone key={c + hero.id}>
              <img data-tip={_.capitalize(_.lowerCase(c))} src={IHeroBattlefieldPointsIcon[c].path}
                   height={IHeroBattlefieldPointsIcon[c].size} data-place='bottom'/>
              <TextStyled>{hero.points[c]}</TextStyled>
            </PointsZone>
          )}
          {hero.skills.map((s: IHeroSkill) =>
            <SkillsZone key={s.name + hero.id}>
              <img data-tip={s.name} src={SkillsIcon[s.iconType]} height={40} data-place='bottom'/>
            </SkillsZone>
          )}
        </IconZone>
      </DetailsContainer>
    );
  }
}

export default SelectedHeroDetailsZone;
