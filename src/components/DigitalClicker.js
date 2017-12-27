// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{
  constructor(){
    super();
    this.state = {
      timesClicked: 0
    };
  }

  updateClicker = function () {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }.bind(this);

  render(){
    return <button onClick={this.updateClicker}>{this.state.timesClicked}</button>
  }
}
export default DigitalClicker

