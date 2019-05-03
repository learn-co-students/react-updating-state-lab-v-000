import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
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
