// Code DigitalClicker Component Here
import React, {Component} from 'react'

export default class DigitalClicker extends Component {
  constructor(){
    this.state = {
      timesClicked: 0
    }
  }
  clickIncrement = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }
  render(){
    return(
      <button onClick= {this.clickIncrement}>{this.state.timesClicked}</button>
    )
  }
}
