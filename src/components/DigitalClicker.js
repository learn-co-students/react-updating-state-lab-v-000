// Code DigitalClicker Component Here

import React, { Component } from 'react'

export default class DigitalClicker extends Component {

  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1,
    }
    // , () => console.log(this.state.hasBeenClicked)
  )};

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      // <button onClick={this.handleClick}> {this.state.timesClicked} {this.state.timesClicked == 1 ? 'click' : 'clicks'}</button>
    )
  }

}
