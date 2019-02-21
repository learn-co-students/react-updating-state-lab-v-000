// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor() {
    super() ;
    
    // Define initial state
    this.state = {
      timesClicked: 0
    };
  }
  
  handleClick = () => {
    let currentClicks = this.state.timesClicked;
    
    this.setState({
      timesClicked: (currentClicks + 1)
    })
    
  }
  
  render () {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
  
}