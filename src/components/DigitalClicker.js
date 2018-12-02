import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  constructor(){
    super()

    this.state = {
      timesClicked: 0,
    }
  }

  handleClick = () => {
    let timesClicked = this.state.timesClicked + 1
    this.setState({
      timesClicked: timesClicked
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked === 0 ? "Click me!" : this.state.timesClicked}</button>
      </div>
    )
  }
}
