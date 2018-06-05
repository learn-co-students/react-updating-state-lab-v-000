// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0
    }
  }

  handleOnClick = () => {
    this.setState({timesClicked: ++this.state.timesClicked})
  }

  render() {
    return(
      <button onClick={this.handleOnClick}>{this.state.timesClicked}</button>
    )
  }
}
