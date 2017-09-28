// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{

  constructor(){
    super();

    this.state = {
      timesClicked: 0
    }
  }

  incrementer = () => {
      this.setState({timesClicked: (++this.state.timesClicked)})
  }


  render(){
    
    return (
      <div>
        <button onClick={this.incrementer}>{this.state.timesClicked}</button>
      </div>
    )};
};

export default DigitalClicker
