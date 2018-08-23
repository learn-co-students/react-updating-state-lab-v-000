import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  count = () => {
    let nextNumber = this.state.timesClicked + 1
    this.setState({
      timesClicked: nextNumber
    })
  }

  render() {
    return (
      <button onClick={this.count}>{this.state.timesClicked}</button>
    )
  }
}
