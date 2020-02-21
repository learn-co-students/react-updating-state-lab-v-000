// Code DigitalClicker Component Here

import React from 'react';
 
class DigitalClicker extends React.Component {
constructor() {
    super();
 
    this.state = {
        timesClicked: 0
    };
  }
 
  clickHandle = () => {
    this.setState(previousState => {
        return {
            timesClicked: previousState.timesClicked + 1
        }
    })
  }
 
  render() {
    return (
      <button onClick={this.clickHandle}>{this.state.timesClicked}</button>
    );
  }
}
 
export default DigitalClicker;