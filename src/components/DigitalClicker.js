import React from 'react';
// Code DigitalClicker Component Here

export default class DigitalClicker extends React.Component {

  constructor() {
    super();

    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    const count = this.state.timesClicked;

    this.setState({
      timesClicked: count + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
