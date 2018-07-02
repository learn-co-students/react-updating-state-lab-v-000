import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

  clickCounter = () => {
    let currentCount = this.state.timesClicked;
    let count = currentCount + 1;

    this.setState({
      timesClicked: count
    });
  }
  render() {
    return (
      <div>
        <button onClick={ this.clickCounter }>{ this.state.timesClicked }</button>
      </div>
    )
  }
}

