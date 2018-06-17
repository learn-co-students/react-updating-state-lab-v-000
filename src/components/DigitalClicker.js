import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    //define the initial state
    this.state = {
      timesClicked: 0
    };
  }
    handleClick = () => {
      this.setState({
        timesClicked: this.state.timesClicked + 1
      })
    }

    render() {
      return (
        <div>
          <label>Button has been clicked {this.state.timesClicked} times</label>
          <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        </div>
      )
    }
}
