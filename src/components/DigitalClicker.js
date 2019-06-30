// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super()

    this.state = { timesClicked: 0 }
  }

  addClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return (
      <div>
        <label>{this.state.timesClicked}</label>
        <button onClick={this.addClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker;