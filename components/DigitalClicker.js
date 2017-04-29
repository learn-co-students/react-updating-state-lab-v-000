import React from 'react'

class DigitalClicker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      timesClicked: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((prevState, props) => ({ timesClicked: prevState.timesClicked + 1 }))
  }

  render() {
    return (
      <div>
        <p>You clicked this button {this.state.timesClicked} times</p>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker
