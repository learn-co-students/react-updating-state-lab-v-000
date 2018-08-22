// Code DigitalClicker Component Here
import React from "react";

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  updateClicker = () => {
    this.setState({
      timesClicked: parseInt(this.state.timesClicked) + 1
    });
  };

  render() {
    return (
      <div id="clicker">
        <button onClick={this.updateClicker}>{this.state.timesClicked}</button>
        <label>{this.state.timesClicked}</label>
      </div>
    );
  }
}

export default DigitalClicker;
