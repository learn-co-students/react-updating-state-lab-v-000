import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0
    }
  }

  click = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return(
      <div>
        <label>Button has been clicked {this.state.timesClicked} times</label>
        <button onClick={this.click}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
