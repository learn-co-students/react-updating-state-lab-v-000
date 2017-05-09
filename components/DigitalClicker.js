import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }

  render() {
    return (
      <div>
        <button className="timesClicked" onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}