// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = (event) => {
    this.setState({ timesClicked: this.state.timesClicked + 1 }, () => {this.state.timesClicked});
  }

render (){
  return (
    <div>
      <button onClick={this.handleClick}><h2>{this.state.timesClicked}</h2></button>
    </div>
    );
  }


}
