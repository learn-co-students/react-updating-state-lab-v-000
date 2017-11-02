// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component{


  clickEvent = () => {
    this.setState({
        timesClicked: this.state.timesClicked+1
      }
    )
  } 
    constructor(){
        super();
        this.state = {
            timesClicked: 0
        }
    }
   render(){
       return (
           <button onClick={this.clickEvent}>{this.state.timesClicked}</button>
       )
   }
}