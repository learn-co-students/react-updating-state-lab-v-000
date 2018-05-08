// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }
  incrementButton = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1,
    })
  };

  render() {
    return(
      <div>
        <button onClick={this.incrementButton}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
export default DigitalClicker
