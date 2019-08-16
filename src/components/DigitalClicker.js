// Code DigitalClicker Component Here
//
import React from 'react';

class DigitalClicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timesClicked: 0
    }
  }

  render(){
    return (
      <button onClick={this.update}>{this.state.timesClicked}</button>
    )}

  update = () => {
    const increase = this.state.timesClicked + 1;
    this.setState({
      timesClicked: increase 
    });
  }

}

export default DigitalClicker;


