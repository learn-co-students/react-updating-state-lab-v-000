import React from 'react';
import ReactDOM from 'react-dom';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0
    };

    this.digital = this.digital.bind(this);
  }

  digital() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return (
      <div>
        // <p>I have {this.state.timesClicked} been clicked!</p>
        <button onClick={this.digital}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
