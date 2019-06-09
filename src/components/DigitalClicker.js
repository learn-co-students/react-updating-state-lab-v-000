import React from 'react';
 
export default class DigitalClicker extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      timesClicked: 0
    };
  }
 
  handleClick = () => {
      //using a callback to ensure the state has been updated when you go to use it
    this.setState({
        timesClicked: this.state.timesClicked + 1
      })
  };
 
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}// Code DigitalClicker Component Here
