// Code DigitalClicker Component Here
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
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return (
      <div>
        <p></p>
        <button label={this.state.timesClicked} onClick={this.handleClick}>{this.state.timesClicked===0 ? 'Click Me!' : this.state.timesClicked}</button>
      </div>
    );
  }


}

export default DigitalClicker;
