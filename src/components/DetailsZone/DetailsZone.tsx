import { IHeroBattlefield, IHeroSkill } from "../../core/models";
import {
  BoxStyled,
  CharacteristicsZoneStyled,
  CharacteristicZoneStyled,
  DetailsZoneStyled, PointsZone, SkillsAndPointsZone, TextBoldStyled, TextStyled,
  TitleStyled,
  ZoneStyled
} from "./DetailsZoneStyles";

import * as _ from "lodash";
import * as React from "react";
import * as ReactTooltip from "react-tooltip";

interface IProps {
  hero: IHeroBattlefield
}

class DetailsZone extends React.PureComponent<IProps, {}> {

  public render() {
    const {hero} = this.props
    return (
      <ZoneStyled>
        <BoxStyled>
          <TitleStyled>{hero.id} details</TitleStyled>
          <DetailsZoneStyled>
            <img src={hero.assets.tokenPath.path}
                 data-tip={hero.description}
                 width={hero.assets.tokenPath.width}
                 height={hero.assets.tokenPath.height}/>
            <ReactTooltip place='top' type='light' multiline={true}/>
            <CharacteristicsZoneStyled>
              {Object.keys(hero.characteristics).map(c =>
                <CharacteristicZoneStyled key={c + hero.id + hero.playerId}>
                  <TextBoldStyled>{_.capitalize(_.lowerCase(c))}:</TextBoldStyled>
                  <TextStyled>{hero.characteristics[c]}</TextStyled>
                </CharacteristicZoneStyled>)}
            </CharacteristicsZoneStyled>
            <SkillsAndPointsZone>
              <div>
                {Object.keys(hero.points).map(c =>
                  <PointsZone key={c + hero.id + hero.playerId}>
                    <TextBoldStyled>{_.capitalize(_.lowerCase(c))}:</TextBoldStyled>
                    <TextStyled>{hero.points[c]}</TextStyled>
                  </PointsZone>)}
              </div>
              <div>
                {hero.skills.map((s: IHeroSkill) =>
                  <TextBoldStyled key={s + hero.id + hero.playerId}>{s.name}</TextBoldStyled>
                )}
              </div>
            </SkillsAndPointsZone>
          </DetailsZoneStyled>
        </BoxStyled>
      </ZoneStyled>
    );
  }
}

export default DetailsZone;
