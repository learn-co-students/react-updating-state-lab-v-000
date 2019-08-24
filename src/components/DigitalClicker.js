import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor() {
        super();
     
        // Define the initial state:
        this.state = {
            timesClicked: 0
        };
      }

      handleClick = () => {
        this.setState({
            timesClicked: this.setState.timesClicked + 1
          }, () => console.log(this.state.timesClicked))
      }


    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
