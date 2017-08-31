import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

    // Define the initial state:
    this.state = {
      // object representing
      timesClicked: 0,
    };
  }

  handleClick = () => {
    // Update our state here...
    this.setState({
      timesClicked: this.state.timesClicked + 1,
     })
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked === 0 ? "Click Me" : this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
