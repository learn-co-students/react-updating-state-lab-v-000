// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor(){
    super();
    this.state = {
      timesClicked: 0
    }
  }

  clickHandler = (e)=>{
    this.setState({
      timesClicked: ++this.state.timesClicked
    });
  }

  render() {
    return (
      <button onClick = {this.clickHandler}>{this.state.timesClicked}</button>
    );
  }
}
