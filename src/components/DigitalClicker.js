// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor () {
    super ();

    this.state = {
      timesClicked: 0
    };
  }

  clickCount = () => {
    var count = this.state.timesClicked
    // console.log(count);
    this.setState({
      timesClicked: (count + 1)
    })
  }
  render () {
    return (
      <button onClick={this.clickCount}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
