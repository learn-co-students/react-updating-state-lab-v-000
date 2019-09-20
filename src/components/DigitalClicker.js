import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  clickeroo = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return(
        <button onClick={this.clickeroo}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
