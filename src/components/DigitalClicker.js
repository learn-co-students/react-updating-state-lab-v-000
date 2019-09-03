import React, { Component } from 'react';
// import  from './';



export default class DigitalClicker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
      }

  render() {
      return (
        <div className="">
          <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        </div>
      )
    }
}
