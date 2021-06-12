import React, { Component } from 'react';

export default class DigitalClicker extends Component {
    constructor(props) {
        super()
        this.state = {
            timesClicked: 0
         } // ...define initial state with a key of 'color' set to the 'value' prop
    }

    handleClick = (event) =>{
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
          })
        
    }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}
