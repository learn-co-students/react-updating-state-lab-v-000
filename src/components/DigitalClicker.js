// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  clickHandler = () => {
    this.setState(
      {timesClicked: this.state.timesClicked +1},
      () => this.state.timesClicked
    )
  }
  render(){
    return(
      <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker;
