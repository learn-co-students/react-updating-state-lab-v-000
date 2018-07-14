// src/components/ClickityClick.js
import React from 'react';
 
class DigitcalClicker extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      timesClicked: 0
    };
  }


handleClick = () => {
  this.setState( {timesClicked: this.state.timesClicked + 1}, () => console.log(this.state.timesClicked) ) // prints true
	}

 
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

 
export default DigitcalClicker;

