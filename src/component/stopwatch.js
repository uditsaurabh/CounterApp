import React from "react";
import ButtonComponent from "./ButtonComponent";

class StopWatch extends React.Component {
  constructor(props) {
    super();
    this.state = {
      seconds: 0,
      minutes: 0
    };
  }

  componentDidMount() {
    this.startTimer();
  }
  componentWillUnmount() {
    this.clearAllInterval();
  }

  startTimer = () => {
    if (!this.secondSetInterval && !this.minuteSetInterval) {
      this.secondSetInterval = setInterval(() => {
        this.tick();
      }, 1000);
      this.minuteSetInterval = setInterval(() => {
        this.minuteTick();
      }, 60000);
    }
  };

  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  }
  minuteTick() {
    this.setState({ minutes: this.state.minutes + 1, seconds: 0 });
  }
  clearAllInterval = () => {
    clearInterval(this.secondSetInterval);
    clearInterval(this.minuteSetInterval);
    this.secondSetInterval = null;
    this.minuteSetInterval = null;
  };
  render() {
    return (
      <div>
        {"seconds " + this.state.seconds + " minutes " + this.state.minutes}
        <div>
          <ButtonComponent
            buttonFunctionality={() => {
              this.setState({ minutes: 0, seconds: 0 });
            }}
          >
            Reset The time
          </ButtonComponent>
          <ButtonComponent buttonFunctionality={this.startTimer}>
            Start The Watch
          </ButtonComponent>
          <ButtonComponent buttonFunctionality={this.clearAllInterval}>
            Stop The Watch
          </ButtonComponent>
        </div>
      </div>
    );
  }
}

export default StopWatch;
