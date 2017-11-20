// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0,
    };
  }

  timesClicked = () => {
    // Update our state here...
    this.setState({
    timesClicked: ++this.state.timesClicked
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.timesClicked}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
