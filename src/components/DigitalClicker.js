import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor (){
    super();

    this.state = {
      timesClicked: 0
    }

    this.updateClicks = this.updateClicks.bind(this);
  }

  updateClicks(){
    this.setState({ timesClicked: ++this.state.timesClicked });
  }
  render(){
    return (<button onClick={this.updateClicks}>{this.state.timesClicked}</button>);
  }
}
