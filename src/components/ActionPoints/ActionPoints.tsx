import { ActionPointsIcon, IHeroBattlefield, UIAssets } from "../../core/models";
import { constants } from "../../utils/constants";
import { ActionPointsImagesZoneStyled, ActionPointsStyled, ActionPointsZoneStyled } from "./ActionPointsStyles";

import * as _ from "lodash";
import * as React from "react";

interface IProps {
  currentHero: IHeroBattlefield
}

interface IState {
  currentAP: number
}

class ActionPoints extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      currentAP: this.props.currentHero.currentActionPoints
    };
  }

  public componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.currentHero.currentActionPoints !== this.state.currentAP) {
      this.setState({
        currentAP: nextProps.currentHero.currentActionPoints
      });
    }
  }

  public render() {
    const cp = this.state.currentAP;
    return (
      <ActionPointsImagesZoneStyled>
        <img src={UIAssets.actionPointsBackground.path} height={50}/>
        <ActionPointsZoneStyled>
          {_.range(constants.actionPoints).map((i: number) =>
            <ActionPointsStyled key={i}
                                src={cp <= i ? ActionPointsIcon.actionPointEmpty.path : ActionPointsIcon.actionPointFull.path}
                                height={cp <= i ? ActionPointsIcon.actionPointEmpty.size : ActionPointsIcon.actionPointFull.size}/>
          )}
        </ActionPointsZoneStyled>
      </ActionPointsImagesZoneStyled>
    );
  }
}

export default ActionPoints;
