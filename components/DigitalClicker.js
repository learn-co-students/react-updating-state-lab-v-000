import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timesClicked: 0
    }
    this.clicked = this.clicked.bind(this)
  }
  clicked() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    }, ()=>{console.log(this.state.timesClicked)})
  }
  render() {
    return <button onClick={this.clicked}>{this.state.timesClicked}</button>
  }
}
