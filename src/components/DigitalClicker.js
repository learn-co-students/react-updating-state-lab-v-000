import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0
    }
  }

  numTimesClicked = () => {
    this.setState((prevState) => {
      return {timesClicked: prevState.timesClicked + 1}
    })
  }

  render() {

    return (
      <button onClick={this.numTimesClicked}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
