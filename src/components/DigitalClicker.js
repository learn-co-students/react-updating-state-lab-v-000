// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

  addNumber = () => {
    var i = this.state.timesClicked + 1
    this.setState({
      timesClicked: i
    })
  }

  render() {
    return (
      <button onClick={this.addNumber}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
