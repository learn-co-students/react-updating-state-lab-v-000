// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {timesClicked: 0}
  }

  buttonClick = () => {
    const clicks = this.state.timesClicked + 1
    this.setState({
      timesClicked: clicks
    }, () => {  })
  }

  render() {
    return(
      <button onClick={this.buttonClick}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker;
