// DigitalClicker:
// ✓ should have the correct initial state
// ✓ should update the count when the button is clicked
// ✓ should update the button label when the state changes

import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked+1
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;