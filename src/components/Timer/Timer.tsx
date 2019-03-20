import { IHeroBattlefield, UIAssets } from "../../core/models";
import { constants } from "../../utils/constants";
import { TimerStyled, TimerZoneStyled } from "./TimerStyles";

import * as _ from 'lodash'
import * as React from "react";

interface IProps {
  nextHero: () => void
  minutesTurn: number
  secondsTurn: number
  hero: IHeroBattlefield
}

interface IState {
  totalTime: number
}

class Timer extends React.PureComponent<IProps, IState> {

  private interval: NodeJS.Timer;

  constructor(props: IProps) {
    super(props);
    this.state = {
      totalTime: this.props.minutesTurn * 60 + this.props.secondsTurn
    };
    this.stopTimer = _.debounce(this.stopTimer, 0, {leading: true, trailing: false})
  }

  public componentDidMount() {
    this.startTimer();
  }

  public componentWillReceiveProps(nextProps: IProps) {
    if (this.props.hero.id !== nextProps.hero.id
      && this.props.hero.playerId !== nextProps.hero.playerId) {
      this.stopTimer()
    }
  }

  public render() {
    const { totalTime } = this.state;
    return (
      <TimerZoneStyled>
        <img src={UIAssets.timerBackground.path} width={UIAssets.timerBackground.width}/>
        <TimerStyled
          isWarning={totalTime <= constants.timerWarning}
          isAlert={totalTime <= constants.timerAlert}>
          {this.formatTime(totalTime)}
        </TimerStyled>
      </TimerZoneStyled>
    );
  }

  private startTimer = () => {
    this.interval = setInterval(() => {
      this.setState({ totalTime: this.state.totalTime - 1 });
    }, 1000);
  };

  private readonly stopTimer = () => {
    clearInterval(this.interval);
    this.setState({ totalTime: this.props.minutesTurn * 60 + this.props.secondsTurn });
    this.startTimer();
  };

  private formatTime = (totalTime: number): string => {
    if (totalTime > 0) {
      const seconds = totalTime % 60;
      const minutes = Math.floor(totalTime / 60);
      return `${minutes < 10 ? "0" : "0"}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    } else {
      this.stopTimer();
      this.props.nextHero();
      return "00:00";
    }
  };
}

export default Timer;
