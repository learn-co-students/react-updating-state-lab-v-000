import React from 'react';

class DigitalClicker extends React.Component {
  constructor(){
    super();
    this.state = {
      timesClicked: 0
    }
  }
  increaseClicks = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }
  render() {
    return(
      <button onClick={this.increaseClicks}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker;
