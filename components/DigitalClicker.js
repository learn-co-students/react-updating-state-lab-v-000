import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timesClicked: 0
    };

    this.addClick = this.addClick.bind(this);
  }

  addClick() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }

  render() {
    return (
      <button
        onClick={this.addClick} >
        {this.state.timesClicked}
      </button>
    );
  }
}
