const React = require('react')

class DigitalClicker extends React.Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return (
      <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
    )
  }
}

module.exports = DigitalClicker
