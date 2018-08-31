// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  addClick = () => {
    console.log("add clicks!")
    let add = this.state.timesClicked + 1;
    this.setState({timesClicked: add}, () => console.log(this.state.timesClicked))
  }

  render() {
    return (
        <button onClick={this.addClick}>{this.state.timesClicked}</button>
    )
  }
}
