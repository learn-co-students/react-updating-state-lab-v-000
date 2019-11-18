// Code DigitalClicker Component Here

// this is not the same
import React from 'react';
 
class DigitalClicker extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
        timesClicked: 0
    };
  }
 
  handleClick = () => {
    this.setState({ timesClicked: (this.state.timesClicked + 1) });
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
 
export default DigitalClicker;
