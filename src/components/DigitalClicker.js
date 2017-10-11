// Code DigitalClicker Component Here

import React from 'react';


export default class DigitalClicker extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      timesClicked: 0
    };

    this.handleClick = this.handleClick.bind(this);

  }  

  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1,
    });
  }


  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}