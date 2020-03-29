// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component{
  constructor(props){
    super(props)
    this.state = {
      timesClicked: 0
    }
  }
  clickity = () => {
    let newCount = this.state.timesClicked + 1
    this.setState({
      timesClicked: newCount
    })
  }
  render(){
    return(
    <div>
    <button
    onClick={this.clickity}>{this.state.timesClicked}</button>
    </div>
  )
    }
}
