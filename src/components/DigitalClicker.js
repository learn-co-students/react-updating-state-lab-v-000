import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0,
    }
  }

  handleClick = () => {
    this.setState({
      // incremental operator (++) works directly against the state value
      // stackoverflow.com/questions/39316376/how-to-use-the-increment-operator-in-react
      timesClicked: this.state.timesClicked + 1,
    })
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.timesClicked}</button>
  }
}

export default DigitalClicker
