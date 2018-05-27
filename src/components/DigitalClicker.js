import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked,
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;


// // Code DigitalClicker Component Here
//
//
// import React from 'react'
//
// class DigitalClicker extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       timesClicked: 0,
//       // label: "0"
//     }
//
//   }
//
//   handleClick = () => {
//
//       // this is from FI solution but won't it lead to compounding.  When
//       //timesClicked is two, then the number will go up by two.
//       timesClicked: ++this.state.timesClicked
//
//       // this.setState((timesClicked) => {
//       // return {timesClicked +1}})
//       // {
//       // timesClicked += 1
//       // }
//       // }
//     }
//
//   render() {
//     return(
//       <button onClick={this.handleClick}>{this.state.timesClicked}</button>
//       // <button label= {this.state.label} onClick={this.handleClick} />
//     )
//   }
// }
//
// export default DigitalClicker
