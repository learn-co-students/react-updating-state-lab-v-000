// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  updateClickState = () => {
    this.setState({ timesClicked: ++this.state.timesClicked })
  };

  render() {
    return (
      <div>
        <button onClick={this.updateClickState}>
          { this.state.timesClicked }
        </button>
      </div>
    );
  }
}

export default DigitalClicker;
