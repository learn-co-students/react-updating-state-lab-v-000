import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor () {
    super()
    this.state = {
      timesClicked: 0
    }
  }
  handleClick = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }
  render () {
    return (
      <button onClick={this.handleClick} label={this.state.timesClicked}>{this.state.timesClicked}</button>
    )
  }
}
