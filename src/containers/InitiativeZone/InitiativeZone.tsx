import { IHeroBattlefield } from "../../core/models";
import { colors } from "../../utils/colors";
import {
  CurrentHero,
  CurrentHeroTeam,
  CurrentHeroZone,
  InitiativeContainer, SecondaryHero,
  SecondaryHeroesZone, SecondaryHeroTeam
} from "./InitiativeZoneStyles";

import { Icon } from "@material-ui/core";
import * as React from "react";
import * as ReactTooltip from "react-tooltip";

interface IProps {
  heroesSorted: IHeroBattlefield[]
}

// interface IState {}

class InitiativeZone extends React.PureComponent<IProps, {}> {

  // todo CHANGE 2 TO 9

  public render() {
    const heroes = this.props.heroesSorted;
    return (
      <InitiativeContainer>
        <CurrentHeroZone>
          <CurrentHero>
            <ReactTooltip place='top' type='light' effect='solid' multiline={true}/>
            <img src={heroes[0].assets.tokenPath.path}
                 data-tip={heroes[0].id}
                 width={heroes[0].assets.tokenPath.width * 1.6}
                 height={heroes[0].assets.tokenPath.width * 1.6}/>
            <CurrentHeroTeam/>
          </CurrentHero>
        </CurrentHeroZone>
        <SecondaryHeroesZone>
          {heroes.map((h: IHeroBattlefield, ind: number) => {
            if (ind === 0 || ind > 2) {
              return null;
            }
            return <SecondaryHero key={h.playerId + h.id}>
              <ReactTooltip place='top' type='light' effect='solid' multiline={true}/>
              <img src={h.assets.tokenPath.path}
                   data-tip={h.id}
                   width={h.assets.tokenPath.width * 0.8}
                   height={h.assets.tokenPath.width * 0.8}/>
              <SecondaryHeroTeam sameTeam={h.playerId === heroes[0].playerId}/>
            </SecondaryHero>;
          })}





          {heroes.length > 2 &&
            <div style={{marginBottom: 14, marginRight: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
          <Icon style={{
            fontSize: 36,
            color: colors.paleBlue
          }}>more_horiz</Icon></div>}




        </SecondaryHeroesZone>
      </InitiativeContainer>
    );
  }
}

export default InitiativeZone;
