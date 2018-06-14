// Code DigitalClicker Component Here

import React from 'react';

export default class DigitalClicker extends React.Component{
  constructor(){
    super();
    this.state = {
      timesClicked: 0
    };
  };

  handleClick = () => {
    this.setState(prevState => {
      return {timesClicked: prevState.timesClicked + 1}
    });

  }


  render(){
    return(
      <button onClick = {this.handleClick} label={this.state.timesClicked}>{this.state.timesClicked}</button>

    )



  }

};
