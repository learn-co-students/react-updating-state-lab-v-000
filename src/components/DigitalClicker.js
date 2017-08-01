// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component{
  constructor(){
    super();
    this.state = {
      timesClicked: 0
    }
  }

  increment = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    }, console.log(this.state.timesClicked))
  }

  render(){
    return(
      <button onClick={this.increment}>{this.state.timesClicked}</button>
    )
  }
}
