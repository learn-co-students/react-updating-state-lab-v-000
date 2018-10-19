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
 

  handleClick = (evt) => {
    this.setState({
      timesClicked: this.state.timesClicked + 1,
    })
  }

  render() {
    return (
      <button className="increment-state-button" onClick={this.handleClick}>
	    {this.state.timesClicked}
      </button>
    )
  }
}

export default DigitalClicker;
