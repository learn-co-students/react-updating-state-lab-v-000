import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    }
  }

  increaseClickCount = () => {
    let counter = this.state.timesClicked+1
    this.setState({
      timesClicked: counter,
    })
  }

  render() {
    return(
      <button onClick={this.increaseClickCount}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker;
