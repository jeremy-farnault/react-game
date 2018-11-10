import * as React from "react";

interface IProps {
  nextHero: () => void
  minutesTurn: number
  secondsTurn: number
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
  }

  public componentDidMount() {
    this.startTimer()
  }

  public render() {
    const { totalTime } = this.state;
    return (
      <div>
        <div>
          <span>{this.formatTime(totalTime)}</span>
        </div>
      </div>
    );
  }

  private startTimer = () => {
    this.interval = setInterval(() => {
      this.setState({ totalTime: this.state.totalTime - 1 });
    }, 1000);
  };

  private stopTimer = () => {
    clearInterval(this.interval);
    this.setState({ totalTime: this.props.minutesTurn * 60 + this.props.secondsTurn });
    this.startTimer();
    this.props.nextHero();
  };

  private formatTime = (totalTime: number): string => {
    if (totalTime > 0) {
      const seconds = totalTime % 60;
      const minutes = Math.floor(totalTime / 60);
      return `${minutes < 10 ? "0" : "0"}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    } else {
      this.stopTimer();
      return "00:00";
    }
  };
}

export default Timer;
