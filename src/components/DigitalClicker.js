// Code DigitalClicker Component Here
import React from 'react';
import reactDOM from 'react-dom';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }
  addClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return (
      <div>
      <button onClick={this.addClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
