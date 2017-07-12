import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }
  
  addClick = () => {
    var i = this.state.timesClicked + 1
     this.setState({
    timesClicked: i
    })
  }

  render() {
    return (
      <button onClick={this.addClick}>{this.state.timesClicked}</button>
     );
   }
}

export default DigitalClicker