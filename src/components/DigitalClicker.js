import React, { Component } from 'react';

export default class DigitalClicker extends Component {

  constructor(){
    super()

    this.state = {
        timesClicked: 0
    }
  }

  incrementClicker = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render(){
    return (
        <button className="DigitalClicker" onClick={ this.incrementClicker }>{ this.state.timesClicked }</button>
    )
  }

}
