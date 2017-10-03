// Code DigitalClicker Component Here

import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timesClicked: 0
    }
  }

  incrementClick = () => {
    this.setState({
      timesClicked: (this.state.timesClicked+1)
    })
    console.log("Clicked:" + this.state.timesClicked);
  }

  render() {
    return (
      <button onClick={this.incrementClick}>{this.state.timesClicked}</button>
    );
  }
}
