import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({timesClicked: ++this.state.timesClicked});
  };

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}
