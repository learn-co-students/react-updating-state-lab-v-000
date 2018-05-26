// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {timesClicked: 0};
  }

  handleClick = (event) => {
    let timesClicked = this.state.timesClicked + 1;
    this.setState({timesClicked: timesClicked});
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}
