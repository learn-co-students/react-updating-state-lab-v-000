import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    }, () => console.log(this.state.timesClicked))
  }

  render() {
    return (
      <div>
        <p>I have been clicked {this.state.timesClicked} times.</p>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}