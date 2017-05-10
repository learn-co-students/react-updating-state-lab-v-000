import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }

    this.count = this.count.bind(this);
  }

  count() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }

  render() {
    return (
      <button onClick={this.count}>{this.state.timesClicked}</button>
    );
  }
}
