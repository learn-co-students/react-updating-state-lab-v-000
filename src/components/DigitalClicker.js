import React from 'react';

// first attempt 5/1/18
// export default class DigitalClicker extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       timesClicked: 0,
//     }
//   }
//
//   handleClick = () => {
//     this.setState({
//       timesClicked: this.state.timesClicked+1
//     })
//   }
//
//   render() {
//     return(
//       <button onClick={this.handleClick}>{this.state.timesClicked}</button>
//     )
//   }
// }
// second attempt 11/7/18
export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked+1
    })
  }

  render() {
    return (
      <div className="digital-clicker">
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
