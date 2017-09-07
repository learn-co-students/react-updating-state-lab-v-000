import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
    this.incrementClicked = this.incrementClicked.bind(this)
  }

  incrementClicked() {
    this.setState((prevState, props) => {
      return {timesClicked: prevState.timesClicked += 1}
    })
  }

  render() {
    return (
      <div className="digital-clicker">
        <button onClick={this.incrementClicked}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker
