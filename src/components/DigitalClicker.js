// Code DigitalClicker Component Here
import React from 'react'
export default class DigitalClicker extends React.Component{
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }
  handleClikc = () => {
    timeClicked + 1;
  }
  render(){
    return(
      <button onClick={this.handleClick}>
        {this.timeCliked}
      </button>

    )
  }
}
