// Code DigitalClicker Component Here
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
    // Update our state here...
    let incrementer = this.state.timesClicked + 1;
    this.setState({
       timesClicked: incrementer
      }) 
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