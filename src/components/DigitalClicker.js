// Code DigitalClicker Component Here
import React, { Component } from 'react'

export class DigitalClicker extends Component {

  constructor() {
    super();

    // Define the inital state:
    this.state = {
      timesClicked: 0,
    };
  }

  counterClick = () => {
    // Update our state here
    this.setState(previousState => ({
      timesClicked: previousState.timesClicked + 1
      
    }))
  };

  render() {
    return (
      <div>
        <button
          onClick={this.counterClick}
          >{this.state.timesClicked}
        </button>
      </div>
    )
  }
}

export default DigitalClicker
