import React from 'react';
 
export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }
 
  handleClick = () => {
    console.log(`before setState: ${this.state.timesClicked}`)
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return (
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}