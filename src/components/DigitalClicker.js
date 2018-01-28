// Code DigitalClicker Component Here

import React from 'react';

export default class DigitalClicker extends React.Component{

constructor(){
  super();
  this.state = {
    timesClicked: 0,
  }
}

handleClick = () =>{
 this.setState({timesClicked: ++this.state.timesClicked,})
}

render(){

  return(
    <div>
    <p>{this.state.timesClicked} is the time its been clickes</p>
    <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    </div>
  )
}

}
