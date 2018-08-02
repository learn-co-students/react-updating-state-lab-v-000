import React, { Component } from 'react'


export default class DigitalClicker extends Component {
  constructor(){
    super()
    this.state={
      timesClicked: 0
    }
  }
  clickEvent = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }
  render(){
    return (
      <div>
      <button onClick={this.clickEvent}>{this.state.timesClicked}</button>

      </div>
    )
  }
}
