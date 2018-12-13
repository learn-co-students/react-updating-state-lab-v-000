import React, { Component } from 'react';


export default class DigitalClicker extends React.Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.state.timesClicked++
    this.setState({timesClicked:this.state.timesClicked++})
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}
