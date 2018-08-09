// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0
    };
  }// end constructor

  handleClick = () => {
    this.setState((prevState, props) => ({
      timesClicked: prevState.timesClicked + 1
    }));

  }// end handleClick

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }//end render
}//end class

export default DigitalClicker;
