import React from 'react';
 export default class DigitalClicker extends React.Component {
  constructor() {
    super();
     this.state = {
      timesClicked: 0
    }
  }
   clicker = (prevState) => {
    this.setState(prevState => {
      return {timesClicked: prevState.timesClicked + 1}
    })
  }
   render() {
    return (
      <button onClick={this.clicker}>{this.state.timesClicked}</button>
    );
  }
}
