// Code DigitalClicker Component Here

// Import the React library
import React from 'react';

//Create components by extending React.Component
class DigitalClicker extends React.Component {
  constructor() {
    super();
    //Define the initial state property
    this.state = {
      timesClicked: 0,
    };
  }
  //Update state, increment by 1
  handleClick = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker;
