// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  // updateOnClick = () => {
  //   this.setState({
  //     timesClicked:
  //   })
  // }

  updateOnClick = () => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    });
  };


  render() {
    return(
      <div>
        <h1> times clicked: {this.state.timesClicked} </h1>
        <button onClick={ this.updateOnClick }>{this.state.timesClicked}</button>
      </div>
    )
  }


}
