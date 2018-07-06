// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    // Update our state here...
      this.setState({
     timesClicked: this.state.timesClicked + 1
   })
  }

  render() {
    return (
      <div>
        <p>I have been clicked {this.state.timesClicked} times!</p>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker;
