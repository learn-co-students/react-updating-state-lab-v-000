import React from 'react';
import ReactDOM from 'react-dom';

export default class DigitalClicker extends React.Component {

  constructor() {
    super()

    this.state = {
      timesClicked: 0,
    };

  }

  clickHandler = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1,
    })
  }

  render() {
    return (
      <div>
      <button value={this.state.timesClicked} onClick={this.clickHandler}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
