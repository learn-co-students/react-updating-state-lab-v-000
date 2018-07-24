// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    const x = this.state.timesClicked
    const y = x + 1
    this.setState({
      timesClicked: y
    }, this.forceUpdate())
  }

  render() {
    return(
      <button value={this.state.timesClicked} onClick={this.handleClick} />
    )
  }
}

export default DigitalClicker
