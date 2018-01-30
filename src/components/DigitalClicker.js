import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

  updateTimesClicked = ()  => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }

  render() {
    return (
      <button onClick={this.updateTimesClicked}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
