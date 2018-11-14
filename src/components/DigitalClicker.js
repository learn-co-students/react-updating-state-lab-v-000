// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  clickHandler = () => {
    const incrementedTimesClicked = this.state.timesClicked + 1
    this.setState({
      timesClicked: incrementedTimesClicked
    })
  }

  render() {
    return (
      <div>
      <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker
