import React, { Component } from 'react';

class DigitalClicker extends Component{
  constructor(){
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    this.setState({
      timesClicked: (this.state.timesClicked + 1)
    }), console.log(this.state.timesClicked)
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleClick }>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker;