// Code DigitalClicker Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class DigitalClicker extends React.Component {
  constructor(){
    super();

    this.state = {
      timesClicked: 0
    }
  }

  updateClicker = () => {
    this.setState({
      timesClicked: this.state.timesClicked += 1
    })
  }
  render(){
    return <button onClick={this.updateClicker}>{this.state.timesClicked}</button>
  }
}
