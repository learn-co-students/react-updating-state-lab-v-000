import React, {Component} from 'react';

// export default class DigitalClicker extends Component {
//   constructor(props) {
//   super(props)
//   this.state = {
//     timesClicked = 0
//     }
//   }
//
//   handleClick = () => {
//     const clickAmount = this.state.timesClicked + 1
//     this.setState({
//       timesClicked: clickAmount
//     })
//   }
//
//   render() {
//     return (
//       <button onClick={this.handleClick} >{this.state.timesClicked}</button>
//     )
//   }
// }

export default class DigitalClicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    const c = this.state.timesClicked + 1
    this.setState({
      timesClicked: c
    })
  }

  render() {
    return (
      <button onClick={this.handleClick} >{this.state.timesClicked}</button>
    )
  }
}
