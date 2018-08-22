// Code DigitalClicker Component Here
import React, { Component } from "react";

export default class DigitalClicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    }
  }
  
  render() {
    return (
      <button onClick={()=>this.setState({timesClicked: this.state.timesClicked+1})}>
        {this.state.timesClicked}
      </button>
    );
  }
}