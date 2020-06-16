import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  increaseClicked = () => {
    const numTimesClicked = this.state.timesClicked + 1;
    this.setState({
      timesClicked: numTimesClicked
    })
  }

  render(){
    return(
      <button onClick={this.increaseClicked}>
        {this.state.timesClicked}
      </button>
    )
  }
}
