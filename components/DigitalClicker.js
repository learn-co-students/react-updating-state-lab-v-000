import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = { timesClicked: 0 };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ timesClicked: this.state.timesClicked + 1 });
  }

  render() {
    return(
      <button onClick={this.onClick}>{this.state.timesClicked}</button>
    )
  }
}
