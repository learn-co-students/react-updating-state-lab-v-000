import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timesClicked: 0,
    };

    this.updateTimesClicked = this.updateTimesClicked.bind(this)
  }

    updateTimesClicked = event => {
      console.log(this.state.timesClicked)
      this.setState({
        timesClicked: ++this.state.timesClicked,
      });
    }

    render() {
      return(
        <button onClick={ this.updateTimesClicked }>{this.state.timesClicked}</button>
      );
    }


}
