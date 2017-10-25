import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}><label>{this.state.timesClicked}</label></button>
    )
  }
}

export default DigitalClicker;
