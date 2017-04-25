import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var currentClicks = this.state.timesClicked + 1
    this.setState({
      timesClicked: currentClicks,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
