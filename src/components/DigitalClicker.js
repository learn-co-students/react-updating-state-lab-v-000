import React, { Component } from "react";

export class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker;
