// Code DigitalClicker Component Here
import React from 'react';

// create class Dig
export default class DigitalClicker extends React.Component {
  constructor() {
    super();

// 	 key object
    this.state = {
      timesClicked: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      timesClicked: ++this.state.timesClicked,
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}