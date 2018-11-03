import { IHeroBattlefield, IHeroSkill } from "../../core/models";
import {
  CharacteristicsZoneStyled,
  CharacteristicZoneStyled,
  DetailsZoneStyled, PointsZone, SkillsAndPointsZone, TextBoldStyled, TextStyled,
  TitleStyled
} from "./DetailsModalStyles";

import * as _ from "lodash";
import * as React from "react";

interface IProps {
  hero: IHeroBattlefield
}

class DetailsModal extends React.PureComponent<IProps, {}> {

  public render() {
    const { hero } = this.props;
    return (
      <div>
        <TitleStyled>{hero.id} details</TitleStyled>
        <DetailsZoneStyled>
          <img src={hero.assets.tokenPath.path}
               data-tip={hero.description}
               data-place='top'
               width={hero.assets.tokenPath.width}
               height={hero.assets.tokenPath.height}/>
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
      </div>
    );
  }
}

export default DetailsModal;
