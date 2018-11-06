import { ActionPointsIcon, IHeroBattlefield } from "../../core/models";
import { constants } from "../../utils/constants";
import { ActionPointsStyled, ActionPointsZoneStyled } from "./ActionPointsStyles";

import * as _ from "lodash";
import * as React from "react";

interface IProps {
  currentHero: IHeroBattlefield
}

// interface IState {}

class ActionPoints extends React.PureComponent<IProps, {}> {

  public render() {
    const cp = this.props.currentHero.currentActionPoints
    return (
      <ActionPointsZoneStyled>
        {_.range(constants.actionPoints).reverse().map((i: number) =>
          <ActionPointsStyled key={i}
                              src={cp <= i ? ActionPointsIcon.actionPointEmpty.path : ActionPointsIcon.actionPointFull.path}
                              height={cp <= i ? ActionPointsIcon.actionPointEmpty.size : ActionPointsIcon.actionPointFull.size}/>
        )}
      </ActionPointsZoneStyled>
    );
  }
}

export default ActionPoints;

