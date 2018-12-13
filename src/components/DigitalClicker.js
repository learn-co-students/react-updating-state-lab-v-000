// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  incrementCount() {
    this.setState((state) => {
      return {timesClicked: state.timesClicked + 1 }
      });
  }
  
  handleClick = () => {
    this.incrementCount();
  };


  render() {
    return (
    <button onClick={this.handleClick} > {this.state.timesClicked} 
    </button>
   );
  }
}
export default DigitalClicker;
