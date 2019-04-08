import InitiativeHeroPortrait from "../../components/InitiativeHeroPortrait/InitiativeHeroPortrait";
import { IHeroBattlefield, UIAssets, VariousAssets } from "../../core/models";
import { colors } from "../../utils/colors";
import { constants } from "../../utils/constants";
import {
  CurrentHero,
  CurrentHeroTeam,
  CurrentHeroZone, DisplayMoreButton, EndTurnButton,
  InitiativeContainer, SecondaryHero,
  SecondaryHeroesZone, SecondaryHeroTeam, SecondaryHeroZone
} from "./InitiativeZoneStyles";

import { Icon } from "@material-ui/core";
import * as React from "react";
import ReactTooltip = require("react-tooltip");

interface IProps {
  currentSelectedHero: IHeroBattlefield | null
  heroesSorted: IHeroBattlefield[]
  setNextCurrentHero: () => void
  updateSelectedHero: (hero: IHeroBattlefield | null) => void
}

// interface IState {}

class InitiativeZone extends React.PureComponent<IProps, {}> {

  public render() {
    const heroes = this.props.heroesSorted;
    const test = heroes.slice(constants.maxNumberOfHeroesInitiative + 1).map((h: IHeroBattlefield) => ({
      hero: h.id,
      player: h.playerId
    }));
    const remainingHeroes = "<div>" + test.map(s => `<p>` + s.hero + " (" + s.player + ")</p>").join("") + "</div>";
    return (
      <InitiativeContainer>
        <ReactTooltip type='light' effect='solid' multiline={true}/>
        <CurrentHeroZone>
          <CurrentHero>
            <InitiativeHeroPortrait
              hero={heroes[0]}
              updateSelectedHero={this.props.updateSelectedHero}
              src={heroes[0].assets.tokenPath.path}
              dataTip={heroes[0].id}
              positionDetails={UIAssets.detailsBackground.positionBig}
              width={heroes[0].assets.tokenPath.width * 1.4}
              isSelected={!!this.props.currentSelectedHero && this.props.currentSelectedHero === heroes[0]}
              height={heroes[0].assets.tokenPath.width * 1.4}/>
            <CurrentHeroTeam/>
          </CurrentHero>
          <img src={UIAssets.initiativeCurrentHero.path}
               width={UIAssets.initiativeCurrentHero.size}/>
        </CurrentHeroZone>
        <SecondaryHeroesZone>
          {heroes.map((h: IHeroBattlefield, ind: number) => {
            if (ind === 0 || ind > constants.maxNumberOfHeroesInitiative) {
              return null;
            }
            return <SecondaryHeroZone key={h.playerId + h.id}>
              <SecondaryHero>
                <InitiativeHeroPortrait
                  hero={h}
                  updateSelectedHero={this.props.updateSelectedHero}
                  src={h.assets.tokenPath.path}
                  positionDetails={UIAssets.detailsBackground.positionSmall}
                  dataTip={h.id}
                  isSelected={!!this.props.currentSelectedHero && this.props.currentSelectedHero === h}
                  width={h.assets.tokenPath.width * 0.8}
                  height={h.assets.tokenPath.width * 0.8}/>
                <SecondaryHeroTeam sameTeam={h.playerId === heroes[0].playerId}/>
              </SecondaryHero>
              <img src={UIAssets.initiativeOtherHeroes.path}
                   width={UIAssets.initiativeOtherHeroes.size}/>
            </SecondaryHeroZone>;
          })}
          {heroes.length > constants.maxNumberOfHeroesInitiative &&
          <DisplayMoreButton
            data-place='top'
            data-type='dark'
            data-html='true'
            data-tip={remainingHeroes}>
            <Icon style={{ fontSize: 36, color: colors.paleBlue }}>
              more_horiz
            </Icon>
          </DisplayMoreButton>}
        </SecondaryHeroesZone>
        <EndTurnButton
          onClick={this.clickEndTurn}
          src={VariousAssets.endTurn.path}
          data-place='top'
          data-tip={VariousAssets.endTurn.text}/>
      </InitiativeContainer>
    );
  }

  private clickEndTurn = () => {
    this.props.setNextCurrentHero();
  };
}

export default InitiativeZone;
