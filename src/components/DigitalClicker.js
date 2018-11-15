// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0
    }
  }

  incrementClicked = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }
  render() {
    return <button onClick = {this.incrementClicked}>{this.state.timesClicked}</button>
  }
}

export default DigitalClicker
