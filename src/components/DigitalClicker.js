import React from 'react';
 
class DigitalClicker extends React.Component {
  constructor() {
    super();
 
    this.state = { 
        timesClicked: 0
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
        <button class='bitrate' onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
 
export default DigitalClicker;