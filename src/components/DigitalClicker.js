// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    const count = this.state.timesClicked += 1;
    this.setState({ timesClicked: count })
  }


  render() {
    return <button onClick={this.handleClick}>{this.state.timesClicked}</button>
  }
}
