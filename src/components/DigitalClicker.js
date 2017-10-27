// Code DigitalClicker Component Here
import React from 'react'
export default class DigitalClicker extends React.Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0
    }
  }

  updateClicks = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return(
      <div>
        <button onClick={this.updateClicks}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
