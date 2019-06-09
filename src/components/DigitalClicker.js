// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }
  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    }, () => {this.state.timesClicked});
  }
  render() {
    return (
      <div>
      <button onClick={this.handleClick}>
      <h2>{this.state.timesClicked}</h2>
      </button>
      </div>
      )
  }

}


export default DigitalClicker;