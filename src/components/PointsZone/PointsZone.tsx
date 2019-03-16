import { IHeroBattlefield, UIAssets } from "../../core/models";
import { ImageTextDiv, TextZoneStyled } from "./PointsZoneStyles";

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
      <div data-place="bottom" data-tip={"Points left"}>
        <ReactTooltip type='light' effect='solid' multiline={true}/>
        <ImageTextDiv>
          <img
            src={this.props.isCurrentPlayer ? UIAssets.pointsBackground.currentPlayerPath : UIAssets.pointsBackground.enemyPlayerPath}
            width={UIAssets.pointsBackground.width}/>
          <TextZoneStyled>
            {this.props.heroes.map(h => h.playerId === this.props.player ? h.cost : 0)
              .reduce((acc, cur) => acc + cur)}
          </TextZoneStyled>
        </ImageTextDiv>
      </div>
    );
  }
}

export default PointsZone;
