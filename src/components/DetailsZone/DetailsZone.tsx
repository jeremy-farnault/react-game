import { IHeroBattlefield } from "../../core/models";
import {
  BoxStyled,
  CharacteristicsZoneStyled,
  CharacteristicZoneStyled,
  DetailsZoneStyled,
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
                  <div style={{ color: "white", fontWeight: 800, fontSize: 14 }}>{_.capitalize(_.lowerCase(c))}:</div>
                  <div style={{ color: "white", fontSize: 14, marginLeft: 5 }}>{hero.characteristics[c]}</div>
                </CharacteristicZoneStyled>)}
            </CharacteristicsZoneStyled>
            <div
              style={{ flexDirection: "column", justifyContent: "space-between", display: "flex", marginLeft: 10 }}>
              <div>
                {Object.keys(hero.points).map(c =>
                  <div key={c + hero.id + hero.playerId} style={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start"
                  }}>
                    <div style={{ color: "white", fontWeight: 800, fontSize: 14 }}>{_.capitalize(_.lowerCase(c))}:
                    </div>
                    <div style={{ color: "white", fontSize: 14, marginLeft: 5 }}>{hero.points[c]}</div>
                  </div>)}
              </div>
              <div>
                {hero.skills.map((s: string) =>
                  <div key={s + hero.id + hero.playerId}
                       style={{ color: "white", fontWeight: 800, fontSize: 14 }}>{s}</div>
                )}
              </div>
            </div>
          </DetailsZoneStyled>
        </BoxStyled>
      </ZoneStyled>
    );
  }
}

export default DetailsZone;
