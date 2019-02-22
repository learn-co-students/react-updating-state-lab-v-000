import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0
    };
  }

  updateTimesClicked = () => {
    this.setState((prevState) => ({ //can't access this inside of set state so need to access previous state
        timesClicked: prevState.timesClicked +1
    }))
  };

  render() {
    return (
      <button
      onClick={this.updateTimesClicked}
      >
      {this.state.timesClicked}
      </button>
    );
  }
}

export default DigitalClicker;
