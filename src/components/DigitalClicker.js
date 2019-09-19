// Code DigitalClicker Component Here
import React from 'react';
 
class DigitalClicker extends React.Component {
  constructor() {
    super();
     this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    // Update our state here...
    this.setState({
    timesClicked: this.state.timesClicked + 1
   }, () => console.log(this.state.hasBeenClicked)) 
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker;