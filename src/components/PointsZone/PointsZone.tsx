import { IHeroBattlefield } from "../../core/models";
import { PointsZoneStyled, TextZoneStyled } from "./PointsZoneStyles";

import * as React from "react";
import ReactTooltip = require("react-tooltip");

interface IProps {
  player: string
  heroes: IHeroBattlefield[]
  isCurrentPlayer: boolean
}

// interface IState {}

class PointsZone extends React.PureComponent<IProps, {}> {

  public render() {
    return (
      <PointsZoneStyled
        data-place="bottom"
        data-tip={'Points left'}>
        <ReactTooltip type='light' effect='solid' multiline={true}/>
        <TextZoneStyled
          isCurrentPlayer={this.props.isCurrentPlayer}>
          {this.props.heroes.map(h => h.playerId === this.props.player ? h.cost : 0)
            .reduce((acc, cur) => acc + cur)}
        </TextZoneStyled>
      </PointsZoneStyled>
    );
  }
}

export default PointsZone;
